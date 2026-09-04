import { afterEach, describe, expect, it, vi } from 'vitest';
import {
    formatCameraTransform,
    getCameraOffset,
    REVEAL_OBSERVER_OPTIONS,
    REVEAL_SELECTOR,
    MARKETING_SHELL_CLASS_NAME,
    shouldEnableMotion,
    setupMarketingReveals,
    MARKETING_LENIS_OPTIONS,
} from './marketing-motion';

describe('marketing motion', () => {
    it('keeps server-rendered content visible before motion initializes', () => {
        expect(MARKETING_SHELL_CLASS_NAME.split(' ')).toEqual([
            'marketing-shell',
            'site-shell',
        ]);
    });

    it('smooths anchor navigation with clearance for the fixed header', () => {
        expect(MARKETING_LENIS_OPTIONS.anchors.offset).toBe(-104);
        expect(MARKETING_LENIS_OPTIONS.respectReducedMotion).toBe(true);
        expect(MARKETING_LENIS_OPTIONS.syncTouch).toBe(false);
    });

    it('observes the shared text reveal targets', () => {
        expect(REVEAL_SELECTOR).toBe('.reveal');
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

describe('scroll reveal lifecycle', () => {
    afterEach(() => vi.unstubAllGlobals());

    function setup({ reducedMotion = false, hasObserver = true } = {}) {
        const classes = () => {
            const values = new Set<string>();
            return {
                add: (value: string) => values.add(value),
                remove: (value: string) => values.delete(value),
                contains: (value: string) => values.has(value),
            };
        };
        const targets = Array.from({ length: 5 }, () => ({
            classList: classes(),
            style: { setProperty: vi.fn() },
        }));
        const root = { classList: classes(), querySelectorAll: () => targets };
        const frames = new Map<number, FrameRequestCallback>();
        let frameId = 0;
        let intersect: IntersectionObserverCallback;
        let changePreference: () => void = () => {};
        const observer = {
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        };
        const preference = {
            matches: reducedMotion,
            addEventListener: vi.fn((_event: string, callback: () => void) => {
                changePreference = callback;
            }),
            removeEventListener: vi.fn(),
        };
        class Observer {
            constructor(callback: IntersectionObserverCallback) {
                intersect = callback;
                return observer;
            }
        }
        vi.stubGlobal('IntersectionObserver', Observer);
        vi.stubGlobal('window', {
            matchMedia: () => preference,
            requestAnimationFrame: (callback: FrameRequestCallback) => {
                frames.set(++frameId, callback);
                return frameId;
            },
            cancelAnimationFrame: (id: number) => frames.delete(id),
            ...(hasObserver ? { IntersectionObserver: Observer } : {}),
        });
        const initialize = () =>
            setupMarketingReveals(root as unknown as HTMLElement);
        const flushFrame = () => {
            const pending = Array.from(frames.values());
            frames.clear();
            pending.forEach((callback) => callback(0));
        };
        return {
            root,
            targets,
            observer,
            preference,
            frames,
            initialize,
            flushFrame,
            intersect: (visible: boolean) =>
                intersect(
                    targets.map((target) => ({
                        target,
                        isIntersecting: visible,
                    })) as unknown as IntersectionObserverEntry[],
                    observer as unknown as IntersectionObserver,
                ),
            reduceMotion: () => {
                preference.matches = true;
                changePreference();
            },
        };
    }

    it('waits for the initial painted state then reveals intersecting elements once with a bounded stagger', () => {
        const state = setup();
        state.initialize();
        expect(state.root.classList.contains('motion-ready')).toBe(true);
        state.flushFrame();
        expect(state.observer.observe).not.toHaveBeenCalled();
        state.flushFrame();
        expect(state.observer.observe).toHaveBeenCalledTimes(5);
        state.intersect(false);
        expect(state.targets[0].classList.contains('is-visible')).toBe(false);
        state.intersect(true);
        expect(
            state.targets.every((target) =>
                target.classList.contains('is-visible'),
            ),
        ).toBe(true);
        expect(state.targets[4].style.setProperty).toHaveBeenCalledWith(
            '--reveal-delay',
            '180ms',
        );
        expect(state.observer.unobserve).toHaveBeenCalledTimes(5);
    });

    it.each([{ reducedMotion: true }, { hasObserver: false }])(
        'leaves all content visible when animation is unavailable: %j',
        (options) => {
            const state = setup(options);
            state.initialize();
            expect(state.root.classList.contains('motion-ready')).toBe(false);
            expect(
                state.targets.every((target) =>
                    target.classList.contains('is-visible'),
                ),
            ).toBe(true);
            expect(state.frames.size).toBe(0);
        },
    );

    it('cancels pending work on navigation and survives Strict Mode effect remounting', () => {
        const state = setup();
        const cleanup = state.initialize();
        cleanup();
        expect(state.frames.size).toBe(0);
        expect(state.root.classList.contains('motion-ready')).toBe(false);
        expect(state.preference.removeEventListener).toHaveBeenCalled();
        state.initialize();
        expect(state.targets[0].classList.contains('is-visible')).toBe(false);
        state.flushFrame();
        state.flushFrame();
        expect(state.observer.observe).toHaveBeenCalledTimes(5);
    });

    it('immediately reveals remaining content when reduced motion is enabled at runtime', () => {
        const state = setup();
        state.initialize();
        state.reduceMotion();
        expect(state.frames.size).toBe(0);
        expect(
            state.targets.every((target) =>
                target.classList.contains('is-visible'),
            ),
        ).toBe(true);
        expect(state.root.classList.contains('motion-ready')).toBe(false);
        expect(state.observer.disconnect).toHaveBeenCalled();
    });
});
