# Project TODO

- [x] Inspect the current Nextways page structure, brand tokens, content, and existing interactions before editing
- [x] Preserve the existing Nextways Ltd identity while refining the public-facing landing experience
- [x] Implement a cinematic camera-style parallax system where foreground layers move faster, midground layers move at a measured rate, and background layers move slowly with depth
- [x] Add layered visual depth to the hero and key scroll sections without relying on basic background-position shifts
- [x] Add accessible reduced-motion behavior that disables non-essential parallax when prefers-reduced-motion is enabled
- [x] Keep navigation, CTA interactions, responsive layout, and readable contrast intact across desktop and mobile
- [x] Add or update Vitest coverage for the parallax-related utility or component behavior
- [x] Run type checks and tests, inspect runtime logs, and verify the rendered page with screenshots
- [x] Save a checkpoint with all completed changes so the updated site is published and available for rollback
- [x] Fix hero stacking context so the camera-scene imagery remains visible above the fallback hero background and below readable content
- [x] Add the shared camera scene to the custom Projects hero so every public route receives the same depth treatment
- [x] Add a package-level test script so the required Vitest suite runs through the normal project validation command
- [x] Add camera-depth or equivalent layered parallax treatment to at least the main non-hero scroll sections, such as the home feature band and forest panel
- [x] Save and record the final checkpoint/version after the complete visual and test verification
