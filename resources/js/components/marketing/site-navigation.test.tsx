import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@inertiajs/react', () => ({
    Link: ({
        children,
        className,
        href,
    }: {
        children: ReactNode;
        className?: string;
        href: string | { url: string };
    }) => (
        <a
            className={className}
            href={typeof href === 'string' ? href : href.url}
        >
            {children}
        </a>
    ),
    usePage: () => ({
        url: '/',
        props: { appUrl: 'http://site.test' },
    }),
}));

vi.mock('lenis/react', () => ({
    ReactLenis: ({ children }: { children: ReactNode }) => children,
    useLenis: () => null,
}));

vi.mock('@/components/marketing/footer', () => ({
    default: () => <footer />,
}));

import { MarketingShell } from '@/components/marketing/site';

describe('marketing navigation', () => {
    it('renders one home link in both desktop and mobile navigation', () => {
        const markup = renderToStaticMarkup(
            <MarketingShell>
                <p>Page content</p>
            </MarketingShell>,
        );
        const primaryNavigation = markup.match(
            /<nav[^>]+aria-label="Primary navigation"[^>]*>(.*?)<\/nav>/,
        )?.[1];
        const mobileNavigation = markup.match(
            /<nav[^>]+aria-label="Mobile navigation"[^>]*>(.*?)<\/nav>/,
        )?.[1];

        expect(primaryNavigation).toBeDefined();
        expect(primaryNavigation?.match(/>Home<\/a>/g)).toHaveLength(1);
        expect(primaryNavigation).toContain('href="/"');
        expect(mobileNavigation).toBeDefined();
        expect(mobileNavigation?.match(/>Home<\/a>/g)).toHaveLength(1);
        expect(mobileNavigation).toContain('href="/"');
    });
});
