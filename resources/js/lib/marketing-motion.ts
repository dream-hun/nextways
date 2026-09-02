import type { LenisOptions } from 'lenis';

export const MARKETING_LENIS_OPTIONS = {
    autoRaf: true,
    lerp: 0.085,
    respectReducedMotion: true,
    smoothWheel: true,
    stopInertiaOnNavigate: true,
    syncTouch: false,
} satisfies LenisOptions;

export const MARKETING_SHELL_CLASS_NAME =
    'marketing-shell site-shell motion-ready' as const;

export const REVEAL_SELECTOR = '.reveal, .image-shell, .hero-evidence' as const;

export const REVEAL_OBSERVER_OPTIONS = {
    threshold: 0.12,
    rootMargin: '0px 0px -7% 0px',
} as const;

export function shouldEnableMotion(prefersReducedMotion: boolean): boolean {
    return !prefersReducedMotion;
}

export function getCameraOffset(
    scrollY: number,
    sectionTop: number,
    viewportHeight: number,
    depth: number,
): number {
    const boundedDepth = Math.max(0, Math.min(1, depth));
    const travel = (scrollY - sectionTop) * boundedDepth;

    return Math.max(
        -viewportHeight * 0.7,
        Math.min(viewportHeight * 0.52, travel),
    );
}

export function formatCameraTransform(offset: number): string {
    return `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
}
