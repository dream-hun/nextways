import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const stylesheet = readFileSync(
    new URL('../../css/marketing.css', import.meta.url),
    'utf8',
);

describe('marketing style safeguards', () => {
    it('keeps the marketing palette scoped to its shell', () => {
        expect(stylesheet).toContain('.marketing-shell {');
        expect(stylesheet).toContain('color: var(--ink);');
        expect(stylesheet).toContain('background: var(--paper);');
    });

    it('makes reveals progressive and keeps focused content visible', () => {
        expect(stylesheet).toContain('.marketing-shell.motion-ready .reveal');
        expect(stylesheet).toContain('.reveal:focus-within');
        expect(stylesheet).toContain('scroll-margin-top: 104px');
    });

    it('gates pointer motion and disables decorative animation for reduced motion', () => {
        expect(stylesheet).toContain(
            '@media (hover: hover) and (pointer: fine)',
        );
        expect(stylesheet).toContain('@media (prefers-reduced-motion: reduce)');
        expect(stylesheet).toContain('.marketing-shell .animate-marquee');
        expect(stylesheet).toContain('animation: none');
        expect(stylesheet).not.toContain('transition: all');
    });

    it('does not reintroduce layout or typography rules', () => {
        expect(stylesheet).not.toMatch(/\.hero\s*\{/);
        expect(stylesheet).not.toMatch(/\.site-nav\s*\{/);
        expect(stylesheet).not.toMatch(/\.btn\s*\{/);
        expect(stylesheet).not.toContain('family');
    });

    it('restores unclipped images and stationary title lines for reduced motion', () => {
        const reducedMotion = stylesheet.slice(
            stylesheet.indexOf('@media (prefers-reduced-motion: reduce)'),
        );

        expect(reducedMotion).toContain('.reveal-media img');
        expect(reducedMotion).toContain('.reveal-line');
        expect(reducedMotion).toContain('clip-path: none');
        expect(reducedMotion).toContain('transform: none');
        expect(reducedMotion).toContain('transition: none');
    });
});
