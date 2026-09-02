# Nextways Ltd — Design Direction

## Three Directions

### Theme Name: Field Notes / Editorial Practice

Very Brief Intro: A warm, research-led identity that makes sustainability feel tangible, calm, and precise. It combines documentary imagery with an editorial split layout and a tactile paper-like atmosphere.

Probability: 0.07

### Theme Name: Living Systems / Soft Structuralism

Very Brief Intro: A lighter, architectural system built from large type, pale sage fields, and precise diagrams that translate complex advisory work into clear visual structures. The emotional intent is capable, open, and quietly optimistic.

Probability: 0.04

### Theme Name: Green Signal / Quiet Utility

Very Brief Intro: A darker, high-contrast direction where deep forest surfaces, restrained chartreuse accents, and technical labels create a confident advisory instrument for decision-makers. The emotional intent is focused, rigorous, and directional.

Probability: 0.08

## Selected Direction: Field Notes / Editorial Practice

### Design Movement

A contemporary editorial-luxury interpretation of environmental fieldwork: part independent magazine, part trusted advisory practice. The site should feel like a well-kept field notebook translated into a digital experience — measured, tactile, intelligent, and connected to place.

### Core Principles

1. **Evidence before decoration.** Every visual gesture should help visitors understand how Next Ways thinks and works.
2. **Warm precision.** Pair documentary imagery, generous whitespace, and restrained typography with crisp labels, numbers, and structured service details.
3. **Asymmetry with purpose.** Use editorial splits, offset content columns, and horizontal bands instead of repetitive centered cards.
4. **Grounded optimism.** Forest, sage, soil, and warm paper tones should make sustainability feel practical rather than abstract.

### Color Philosophy

Warm off-white is the page’s paper field: it creates calm, legibility, and a sense of considered work. Primary forest green signals trust, ecological responsibility, and long-term thinking; it is reserved for the strongest actions, headings, and deep surfaces. Medium and soft sage green create the connective tissue between those extremes. A muted clay/earth accent is used sparingly to tie the system back to Rwanda’s soil and agricultural context, never as a decorative gradient.

### Layout Paradigm

Use **The Editorial Split** as the dominant structure: major headings and short arguments occupy a large left rail while images, service details, and evidence modules unfold on the right. Some sections should break this rhythm with a full-width forest band or an offset horizontal strip. On mobile, every split becomes a single-column story with text first and imagery second; no negative-margin overlaps or rotations are kept below 768px.

### Signature Elements

1. **Field-note labels:** tiny uppercase metadata such as `NEXT WAYS / 01`, `RWANDA · EAST AFRICA`, and `FIELD NOTE` anchor sections like a research document.
2. **Pathline motif:** thin forest-green connector lines and softly rounded route markers suggest value chains, movement, and progression without becoming a literal diagram.
3. **Paper + image double-bezel:** major visual cards use an outer pale-sage shell with a smaller inner image or content core, like a photograph mounted in a field folder.

### Interaction Philosophy

Interactions should feel like turning a page or tracing a route: quick but unhurried, clear, and reversible. The floating nav stays detached from the viewport edge and becomes more opaque as the page moves beneath it. Buttons use a pill shape with a contained circular arrow that shifts slightly on hover. Service and project rows reveal their supporting detail through gentle transform and opacity changes, while all important information remains visible without requiring motion.

### Animation

Lenis provides the continuous scroll interpolation with native scroll semantics preserved. Use CSS transitions for hover and focus feedback with the strong ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)` and durations between 160–240ms. Use IntersectionObserver-powered reveals for section entrances: opacity from 0 to 1, translateY from 18px to 0, with 30–70ms staggered delays. Decorative route lines may draw once on first view using a short transform/opacity reveal, never a perpetual loop. Respect `prefers-reduced-motion`: keep opacity/color feedback but remove transforms and disable Lenis smoothing.

### Typography System

Use **DM Serif Display** for page headlines and large editorial statements, with **Manrope** for navigation, body copy, metadata, and buttons. H1s are oversized and tightly tracked on desktop, with a maximum line length that preserves a strong editorial shape; H2s should feel like section titles in a report, not generic SaaS headings. Metadata uses 10–11px uppercase text with 0.18em–0.24em tracking. Avoid Inter, Roboto, Arial, Open Sans, and Helvetica.

### Brand Essence

Next Ways is the Rwandan advisory partner for organizations turning environmental and agri-food ambitions into field-grounded, measurable action — differentiated by evidence, local context, and implementation discipline.

Personality adjectives: **Grounded. Exacting. Constructive.**

### Brand Voice

Headlines are direct, confident, and specific; CTAs are invitations to make a decision, not hype. Microcopy sounds like a capable advisor who understands the field and respects the reader’s time.

Example headline: “Make the next decision with better ground truth.”

Example CTA: “Discuss the work in front of you.”

### Wordmark & Logo

Use the supplied Next Ways logo as the primary wordmark in the header and footer. Pair it with the generated transparent abstract pathway mark as a secondary symbol for small contexts and as the visible favicon. Never redraw the wordmark in a default font. The mark should read as a connected route through a living system, not a literal leaf or generic arrow.

### Signature Brand Color

**Next Ways Forest — `oklch(39.5453% 0.07599 163.64)`**. This is the ownable anchor of the identity: deep enough for confident headings and large CTA surfaces, yet visibly organic rather than corporate navy.

## Implementation Reminders

Every CSS, component, and page file must begin with a short comment reminding the implementer that the file follows the **Field Notes / Editorial Practice** system: warm off-white paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, and restrained transform/opacity motion. The five routes are `/`, `/about`, `/services`, `/projects`, and `/contact`. The shared shell includes the floating navigation pill, a slim route-aware footer, and the Next Ways logo assets supplied by the user.

## Style Decisions

- Keep the Field Notes / Editorial Practice direction as the governing system: warm paper field, Next Ways Forest, DM Serif Display + Manrope, editorial splits, evidence-first copy, and restrained transform/opacity motion.
- Distinguish the five routes through varied evidence hierarchy: the home page uses a detached evidence node, About uses company registration context, Services uses a capability count, Projects uses concrete case-study metadata, and Contact uses a brief-setting form spread.
- Use the pathline motif as a consistent brand device: thin forest connectors, small route markers, and evidence nodes are now present in major page sections rather than only as decorative arcs.
- Reserve muted clay/earth for field-context details, captions, and evidence rules; keep Next Ways Forest dominant.
- The first AI-generated hero and transparent mark returned failed placeholders during visual review. The implementation therefore uses uploaded, durable fallback photography from image search for the hero/page imagery and the supplied Next Ways app icon for the small header mark and favicon, while retaining the generated asset reservations out of the UI.

## Motion Refinement Notes

The existing reveal system already tags text and section primitives with `.reveal`; the enhancement now centralizes observer selectors and thresholds in `client/src/lib/motion.ts`. Text continues to settle upward with the established opacity transition, while `.image-shell` elements gain a restrained scale settle on their inner images. The observer unobserves each target after entry, so the page does not repeatedly animate during scroll. Lenis and non-essential reveals are both bypassed when `prefers-reduced-motion: reduce` is active. The motion contract is covered by a focused Vitest spec, and the desktop full-page visual check shows no layout shift or image crop breakage.
