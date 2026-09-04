import type { LenisOptions } from 'lenis';

export const MARKETING_LENIS_OPTIONS = {
    autoRaf: true,
    anchors: { offset: -104 },
    lerp: 0.085,
    respectReducedMotion: true,
    smoothWheel: true,
    stopInertiaOnNavigate: true,
    syncTouch: false,
} satisfies LenisOptions;

export const MARKETING_SHELL_CLASS_NAME = 'marketing-shell site-shell' as const;

export const REVEAL_SELECTOR = '.reveal' as const;

export const REVEAL_OBSERVER_OPTIONS = {
    threshold: 0.12,
    rootMargin: '0px 0px -7% 0px',
} as const;

export function shouldEnableMotion(prefersReducedMotion: boolean): boolean {
    return !prefersReducedMotion;
}

export function setupMarketingReveals(root: HTMLElement): () => void {
    const targets = Array.from(
        root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let firstFrame = 0;
    let revealFrame = 0;

    const stopWatching = () => {
        observer?.disconnect();
        window.cancelAnimationFrame(firstFrame);
        window.cancelAnimationFrame(revealFrame);
        root.classList.remove('motion-ready');
    };

    const revealAll = () => {
        stopWatching();
        targets.forEach((target) => target.classList.add('is-visible'));
    };

    if (
        !shouldEnableMotion(preference.matches) ||
        !('IntersectionObserver' in window)
    ) {
        revealAll();
        return revealAll;
    }

    root.classList.add('motion-ready');
    observer = new IntersectionObserver((entries) => {
        entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry, index) => {
                const target = entry.target as HTMLElement;
                target.style.setProperty(
                    '--reveal-delay',
                    `${Math.min(index, 3) * 60}ms`,
                );
                target.classList.add('is-visible');
                observer?.unobserve(target);
            });
    }, REVEAL_OBSERVER_OPTIONS);

    firstFrame = window.requestAnimationFrame(() => {
        revealFrame = window.requestAnimationFrame(() => {
            targets.forEach((target) => observer?.observe(target));
        });
    });

    const onPreferenceChange = () => {
        if (preference.matches) {
            revealAll();
        }
    };
    preference.addEventListener('change', onPreferenceChange);

    return () => {
        stopWatching();
        preference.removeEventListener('change', onPreferenceChange);
    };
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
