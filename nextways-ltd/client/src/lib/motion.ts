/* Viewport motion contract: text reveals stay light, media reveals add a restrained scale settle, and camera layers use bounded depth offsets with reduced-motion bypasses. */
export const REVEAL_SELECTORS = [".reveal", ".image-shell", ".hero-evidence"] as const;

export const REVEAL_OBSERVER_OPTIONS = {
  threshold: 0.12,
  rootMargin: "0px 0px -7% 0px",
} as const;

export function shouldEnableReveal(prefersReducedMotion: boolean) {
  return !prefersReducedMotion;
}

export function getCameraOffset(scrollY: number, sectionTop: number, viewportHeight: number, depth: number) {
  const boundedDepth = Math.max(0, Math.min(1, depth));
  const travel = (scrollY - sectionTop) * boundedDepth;
  return Math.max(-viewportHeight * 0.7, Math.min(viewportHeight * 0.52, travel));
}

export function formatCameraTransform(offset: number) {
  return `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
}
