import { describe, expect, it } from 'vitest';
import {
    formatCameraTransform,
    getCameraOffset,
    REVEAL_OBSERVER_OPTIONS,
    REVEAL_SELECTOR,
    MARKETING_SHELL_CLASS_NAME,
    shouldEnableMotion,
} from './marketing-motion';

describe('marketing motion', () => {
    it('primes reveal targets before the first visible frame', () => {
        expect(MARKETING_SHELL_CLASS_NAME.split(' ')).toEqual([
            'marketing-shell',
            'site-shell',
            'motion-ready',
        ]);
    });

    it('observes the shared text and media reveal targets', () => {
        expect(REVEAL_SELECTOR).toBe('.reveal, .image-shell, .hero-evidence');
        expect(REVEAL_OBSERVER_OPTIONS).toEqual({
            threshold: 0.12,
            rootMargin: '0px 0px -7% 0px',
        });
    });

    it('disables decorative motion when reduced motion is preferred', () => {
        expect(shouldEnableMotion(false)).toBe(true);
        expect(shouldEnableMotion(true)).toBe(false);
    });

    it('moves foreground camera layers farther than background layers', () => {
        const background = getCameraOffset(700, 0, 800, 0.045);
        const foreground = getCameraOffset(700, 0, 800, 0.36);

        expect(background).toBe(31.5);
        expect(foreground).toBe(252);
        expect(foreground).toBeGreaterThan(background);
    });

    it('keeps camera layers inside the cinematic frame', () => {
        expect(getCameraOffset(-5000, 0, 800, 0.36)).toBe(-560);
        expect(getCameraOffset(5000, 0, 800, 0.36)).toBe(416);
    });

    it('formats camera movement as a GPU-safe transform', () => {
        expect(formatCameraTransform(123.456)).toBe(
            'translate3d(0, -123.46px, 0)',
        );
    });
});
