import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@inertiajs/react', () => ({
    Link: ({
        children,
        href,
    }: {
        children: ReactNode;
        href: string | { url: string };
    }) => <a href={typeof href === 'string' ? href : href.url}>{children}</a>,
}));

import Footer from '@/components/marketing/footer';

describe('marketing footer', () => {
    it('renders the requested navigation and contact columns', () => {
        const markup = renderToStaticMarkup(<Footer />);

        expect(markup).toContain('>Explore<');
        expect(markup).toContain('>Company<');
        expect(markup).toContain('>Contacts<');
        expect(markup).toContain('href="mailto:sebasile@yahoo.fr"');
        expect(markup).toContain('href="tel:+250788867106"');
        expect(markup).toContain('Norrsken House Kigali');
    });

    it('renders accessible social links and the visible logo crop', () => {
        const markup = renderToStaticMarkup(<Footer />);

        expect(markup).toContain('aria-label="Social media"');
        expect(markup).toContain('aria-label="LinkedIn"');
        expect(markup).toContain('aria-label="Facebook"');
        expect(markup).toContain('aria-label="Instagram"');
        expect(markup).toContain('aria-label="X / Twitter"');
        expect(markup).toContain('-top-24.5');
        expect(markup).not.toContain('absolute top-24.5');
    });
});
