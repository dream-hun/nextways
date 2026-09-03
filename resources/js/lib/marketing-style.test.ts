import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const stylesheet = readFileSync(
    new URL('../../css/marketing.css', import.meta.url),
    'utf8',
);

describe('marketing style safeguards', () => {
    it('keeps contextual link colors from being overridden by the shell', () => {
        const shellAnchorRule = stylesheet.match(
            /\.marketing-shell a\s*\{(?<declarations>[^}]*)\}/,
        );

        expect(shellAnchorRule?.groups?.declarations).not.toContain('color:');
        expect(stylesheet).toContain('.btn-light {\n    color: var(--forest);');
        expect(stylesheet).toContain(
            '.hero .btn-ghost {\n    color: var(--paper);',
        );
    });

    it('uses the shared responsive heading scale for standalone headings', () => {
        const displayRule = stylesheet.match(
            /\.display\s*\{(?<declarations>[^}]*)\}/,
        );

        expect(displayRule?.groups?.declarations).toContain(
            'font-size: var(--heading-size);',
        );
    });

    it('keeps home and inner-page artwork inside their hero boundaries', () => {
        const heroRule = stylesheet.match(
            /\.hero\s*\{(?<declarations>[^}]*)\}/,
        );
        const pageHeroRule = stylesheet.match(
            /\.page-hero\s*\{(?<declarations>[^}]*)\}/,
        );
        const heroCopyRule = stylesheet.match(
            /\.hero-home \.hero-copy\s*\{(?<declarations>[^}]*)\}/,
        );

        expect(heroRule?.groups?.declarations).toContain('overflow: clip;');
        expect(pageHeroRule?.groups?.declarations).toContain('overflow: clip;');
        expect(heroCopyRule?.groups?.declarations).toContain(
            'width: min(740px, 100%);',
        );
    });
});
