---
name: crankys-farm-design
description: Use this skill to generate well-branded interfaces and assets for Cranky's FARM (Cranky's Farm Animal Rescue Mission), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping a warm, modern farm-animal-charity brand.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

Quick start:
- **Foundations:** link the single `styles.css`. All colour, type, spacing, radius,
  shadow and motion tokens are CSS custom properties (see `tokens/`). Use the semantic
  aliases (`--color-primary`, `--color-donate`, `--text-body`, `--surface…`).
- **Components:** built into `_ds_bundle.js`, exposed on `window.DesignSystem_5a631a`
  — `Button`, `IconButton`, `Card`, `Badge`, `Stat`, `SectionHeading`, `Input`,
  `Checkbox`. Each component dir has a `.prompt.md` with usage.
- **Full page reference:** `ui_kits/website/` is the refreshed homepage, composed from
  the primitives — copy its patterns (eyebrow + serif heading, photo cards, green
  impact/donate bands, pill buttons, the donate modal flow).
- **Brand:** logo seal variants and real resident photos in `assets/`. Icon set is in
  `ui_kits/website/icons.jsx` (Lucide-style line icons; the filled heart carries Donate).

Brand essence: warm, hopeful, heartfelt. Meadow green hero colour + cream surfaces +
clay accent + raspberry Donate. Editorial serif (Newsreader) headlines over a friendly
grotesque (Hanken Grotesk). Honest photos of the real animals, soft rounded cards, pill
buttons, gentle motion. Australian English. Name the residents. Lead with love.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
