# Website UI kit — Cranky's FARM

A refreshed, modern recreation of the Cranky's FARM homepage, built entirely
from the design-system primitives. It is the reference for "what the brand
looks like in 2026".

## Run it
Open `index.html`. It loads `../../styles.css`, the kit's own `kit.css`
(page layout only), React + Babel, and the compiled `_ds_bundle.js`, then mounts
the homepage.

## Screens & sections
- **Header** — sticky nav, handwritten wordmark + seal, raspberry Donate button, mobile menu.
- **Hero** — editorial split layout: serif headline, mission lead, dual CTA, photo frame with overlapping seal + floating stat.
- **ImpactStrip** — deep-green band of `Stat`s.
- **NewsGrid** — `SectionHeading` + three `Card`s with `Badge`s.
- **CrankyQuote** — the emotive "Meet Cranky" pull-quote with the B&W portrait.
- **ResidentsGrid** — sponsorable resident `Card`s.
- **DonateBand** — deep-green CTA with three ways to help.
- **Footer** — brand blurb, menu, newsletter sign-up.
- **DonateModal** — interactive give flow (frequency, amount presets/custom, fields, thank-you state).

## Interactions to try
- Click **Donate** anywhere → opens the donate modal; pick a frequency & amount, submit → thank-you state. `Esc` or click-outside closes.
- Resize below 1000px → nav collapses into the mobile menu toggle.
- Hover news / resident cards → lift + image zoom.

## Composition
Every primitive comes from `window.DesignSystem_5a631a` (Button, IconButton,
Card, Badge, Stat, SectionHeading, Input, Checkbox). Section components export
themselves to `window`; `App.jsx` composes them. Shared inline icons live in
`icons.jsx`.

## Imagery note
Photos are the charity's own (cropped from the current site): `bunny`, `lilah`,
`gloria`, `cranky-portrait`. Swap in higher-resolution originals when available.
