import { describe, expect, it } from "vitest";
import {
  formatCameraTransform,
  getCameraOffset,
  REVEAL_OBSERVER_OPTIONS,
  REVEAL_SELECTORS,
  shouldEnableReveal,
} from "./motion";

describe("viewport reveal motion", () => {
  it("observes the shared text and media reveal targets", () => {
    expect(REVEAL_SELECTORS).toEqual([".reveal", ".image-shell", ".hero-evidence"]);
    expect(REVEAL_OBSERVER_OPTIONS).toMatchObject({ threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
  });

  it("disables non-essential motion when reduced motion is preferred", () => {
    expect(shouldEnableReveal(false)).toBe(true);
    expect(shouldEnableReveal(true)).toBe(false);
  });
});

describe("camera depth motion", () => {
  it("moves deeper layers less than foreground layers", () => {
    const background = getCameraOffset(700, 0, 800, 0.045);
    const foreground = getCameraOffset(700, 0, 800, 0.36);

    expect(background).toBe(31.5);
    expect(foreground).toBe(252);
    expect(foreground).toBeGreaterThan(background);
  });

  it("bounds offsets so a layer cannot travel out of the cinematic frame", () => {
    expect(getCameraOffset(-5000, 0, 800, 0.36)).toBe(-560);
    expect(getCameraOffset(5000, 0, 800, 0.36)).toBe(416);
  });

  it("formats the layer movement as a GPU-safe 3D transform", () => {
    expect(formatCameraTransform(123.456)).toBe("translate3d(0, -123.46px, 0)");
  });
});
