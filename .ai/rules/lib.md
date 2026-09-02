---
paths:
    - 'resources/js/components/marketing/**|resources/js/lib/marketing-motion.ts'
---

# Lib

## Keep one Lenis scroll owner

MarketingShell owns the persistent ReactLenis root. Scroll-linked camera layers must subscribe through useLenis so they share Lenis's RAF; do not add independent scroll RAF loops. On Inertia navigation, resync Lenis to window.scrollY after resize instead of forcing scroll to zero, preserving Inertia history restoration.
