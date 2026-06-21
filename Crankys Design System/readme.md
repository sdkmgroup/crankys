# Cranky's FARM — Design System

A refreshed brand and component system for **Cranky's FARM Animal Rescue Mission Ltd**,
a registered Australian charity caring for unwanted, neglected and abused farm animals
since 2010.

This system modernises the charity's existing website brand — keeping what's
recognisable (the meadow green, the circular cow-badge seal, the raspberry Donate
action, the warmth) while making it feel **modern, engaging and fresh**: an
editorial serif, warm cream surfaces, a clay accent, generous space, and honest
photography of the real residents.

> **Compiler note:** consumers link the single root `styles.css`. Components are
> bundled into `_ds_bundle.js` (generated) and exposed on
> `window.DesignSystem_5a631a`.

---

## Sources

- **`uploads/screenshot-1 3.jpg`** — full-page screenshot of the current
  Cranky's FARM homepage (the brief: refresh this page). All brand cues, copy
  samples, the logo and resident photos in this system were extracted from it.
- No codebase, Figma file or font files were provided. Fonts are **substituted
  from Google Fonts** (see Visual Foundations → Type) and flagged for approval.

---

## Brand at a glance

- **Who:** A small, hands-on farm-animal sanctuary (cows, goats, sheep, ducks…).
  Funded entirely by community donations, sponsorships, raffles and events.
- **Mission line:** *"Cranky's FARM is a registered charity dedicated to caring
  for unwanted, neglected or abused farm animals."*
- **Named after:** Cranky, a dairy steer rescued in 2010 — the origin story.
- **Goal of the refresh:** look trustworthy and contemporary, move people to
  donate / sponsor / adopt, and let the animals' faces carry the emotion.

---

## CONTENT FUNDAMENTALS — how Cranky's FARM writes

**Voice:** warm, sincere, plain-spoken and a little informal — a real person at a
farm talking to you, not a corporate charity. Hopeful, never guilt-trippy, though
honest about hardship.

- **Person:** First-person plural for the charity (*"we", "our care", "our
  residents"*) and direct second-person to the reader (*"we need **your** help",
  "**you** can sponsor"*). Animals are *who*, never *that* — they have names and
  personalities.
- **Tone:** heartfelt + gently optimistic. Stories open on the animal and a
  problem, then turn to rescue and hope. e.g. *"A gentle six-year-old bull came
  into our care facing the terrifying prospect of the cattle sales… now he is
  safe."*
- **Casing:** Sentence case for body and most headings. The brand shouts one
  word — **FARM** — in all caps ("Cranky's FARM"). Section labels (eyebrows) are
  UPPERCASE. Avoid ALL-CAPS sentences (the old site over-used them — the refresh
  does not).
- **Calls to action:** short, active, kind — *"Donate today", "Sponsor Bunny",
  "Meet the residents", "Read more", "Help us help them".*
- **Naming:** residents are always named (Cranky, Ferdinand, Bunny, Lilah,
  Gloria, Pepper, Poppy, Nutmeg, Dill, Ollie & Mia, Rocky…). Use the name as the
  hook.
- **Numbers / dates:** Australian English & spelling (*neighbour, realise,
  paddock, suburb*); dates as "20 September 2025"; currency "$50".
- **Emoji:** the charity's social copy uses them liberally (💚 🐮 🌿 📢 👉). In
  the **refreshed** system, keep emoji to **social posts and incidental copy
  only** — the UI itself uses the icon set below, not emoji, so the interface
  reads modern and clean. A single 💚 in a thank-you message is on-brand.
- **Things to avoid:** walls of uppercase, exclamation overload, jargon, anything
  that shames the reader. Lead with love, not horror.

**Sample copy** (reuse / adapt):
- Hero: *"Every animal deserves a gentle life."* / *"Cranky's FARM is a registered
  charity caring for unwanted, neglected and abused farm animals. We give them
  safety, vet care and a home for life — and we need your help to keep going and
  growing."*
- Donate band: *"Please help — Help us help them. We rely entirely on the
  kindness of our community."*
- Reassurance microcopy: *"100% of donations go straight to animal care."*

---

## VISUAL FOUNDATIONS

### Colour
Green stays the hero, but **refined and earthier** than the original bright lime,
and warmed with cream rather than stark white.

- **Meadow green** (`--green-500` `#7aa63f`, deepening to `--green-700`/`900`) —
  the brand colour: nav band, primary buttons, headings on green, the impact and
  donate sections.
- **Cream / sand** (`--cream-50` `#fbf8f1` page, white cards) — warm, soft
  backgrounds replacing cold white.
- **Clay / terracotta** (`--clay-500` `#c06a3e`) — the warm secondary accent:
  eyebrow rules, captions, "sponsor" emphasis, illustration warmth.
- **Raspberry** (`--berry-500` `#d1467e`) — reserved almost entirely for the
  **Donate / give** action (a modernised, slightly warmer take on the original
  magenta so it stays recognisable).
- **Sunshine** (`--sun-400` `#f1b73f`) — sparing highlight only (event badges,
  the eyebrow accent on dark).
- **Ink** — a warm-grey text ramp (`--ink-900` headings → `--ink-700` body →
  `--ink-500` muted), never pure black, never cool grey.

Semantic aliases (`--color-primary`, `--color-donate`, `--text-body`,
`--surface…`) are the intended API; reach for raw scale steps only when needed.

### Type
Substituted from Google Fonts (flagged for approval):

- **Newsreader** — editorial serif for display & headings. Warm, characterful,
  with expressive italics used for emphasis ("a *gentle* life"). Tracking −0.02em.
- **Hanken Grotesk** — clean, friendly grotesque for body, labels and controls.
  Body 17px / 1.65 line-height for comfortable reading.
- **Caveat** — handwritten accent, **sparingly**: captions, signatures, the
  wordmark feel. Echoes the script in the original logo. Never body text.

The signature type move is the **eyebrow**: an uppercase, wide-tracked Hanken
label in clay, with a short rule, opening each section — paired with a serif
title beneath.

### Spacing & layout
- 4px base scale (`--space-1…10`); generous section rhythm (`--section-y`,
  clamps ~56–112px). Max content width 1200px, centred, with fluid gutters.
- Grids with `gap` everywhere (news 3-up, residents 3-up, impact 4-up), collapsing
  to 2-up then 1-up. Asymmetric editorial splits for hero and Meet-Cranky.

### Backgrounds
Mostly flat warm cream and white, with **two solid green bands** (impact + donate)
for rhythm — no busy photo collages (the old hero's scattered polaroids are
retired). A single soft radial "blob" tint sits behind the hero. No noisy
gradients; the only gradients are subtle same-hue green deepenings on the bands.

### Imagery
Honest, warm, **the charity's own photos** of the real residents — eye-level,
close, emotive (faces and eyes do the work). Rounded corners (`--radius-md/lg/xl`),
soft warm shadow, occasional white photo-frame border with a tiny rotation for a
hand-placed feel. **Black & white** is reserved for memorial / origin stories
(e.g. Cranky). Avoid stock photography.

### Corners, borders, cards
- **Radii:** soft and friendly — cards `--radius-lg` (24px), hero frame
  `--radius-xl` (34px), **buttons are always pills**. Nothing sharp.
- **Borders:** hairline warm `--border` (#e4ddcc); 2px for inputs and outline
  buttons. No coloured left-border-accent cards (an AI-slop trope we avoid).
- **Cards:** white surface, `--radius-lg`, hairline border + `--shadow-sm`; the
  `raised` variant drops the border for `--shadow-md`. Photo on top, body below.

### Shadows
Warm, low, **ink-tinted** (never blue): `--shadow-xs…lg`. Two coloured "glow"
shadows give CTAs lift — `--shadow-green` and `--shadow-donate`.

### Motion & states
- **Easing** `--ease-out` (gentle, no bounce); durations 120–360ms.
- **Hover:** buttons darken to the `-strong` step; cards lift `translateY(-4px)`
  and the photo zooms `scale(1.04)`; nav links get a soft green pill.
- **Press:** buttons `translateY(1px) scale(0.985)`; icon buttons `scale(0.92)` —
  a small, tactile shrink, never a colour flip.
- **Focus:** 3px solid green focus ring, 2px offset, on every interactive element.
- Respect `prefers-reduced-motion` for any entrance animation you add.

### Transparency & blur
Used lightly and purposefully: the sticky header is cream at 88% with a 10px
backdrop blur; photo caption tags are semi-transparent ink with a small blur;
the donate modal scrim is ink at 55% + 4px blur. Not a glassmorphism system —
blur is a finishing touch, not a theme.

---

## ICONOGRAPHY

The original site has **no real icon system** — just a heart glyph on the Donate
button and emoji (💚🐮🌿📢) scattered through social copy. The refresh introduces a
proper one.

- **System:** a small, consistent **line icon set** in the Lucide style — 24px
  grid, ~2px rounded strokes, `currentColor` — matching the friendly-but-modern
  tone. They live as inline React SVGs in **`ui_kits/website/icons.jsx`**
  (`HeartIcon`, `PawIcon`, `ArrowRight`, `MenuIcon`, `CloseIcon`, `MailIcon`,
  `MapPin`, `Calendar`, `Sprout`, `Quote`, `Facebook`, `Instagram`,
  `ShieldHeart`, `Home`, `Check`). The `HeartIcon` is filled — it carries the
  Donate action, the one icon inherited from the old brand.
- **Substitution flag:** these are hand-built Lucide-style icons (not the licensed
  Lucide package) so the set is self-contained. To expand, install **Lucide**
  (same stroke language) or keep adding to `icons.jsx` in the same style.
- **Usage:** icons support actions and labels (button leading icons, "ways to
  help", social, nav) — they're never decorative clutter. Emoji stay in social /
  incidental copy; the UI uses these icons. Unicode dingbats are not used.
- **Logo / seal** (in `assets/`) is treated as a **stamp**, not an icon —
  see Brand below.

### Brand assets (`assets/`)
- `logo-mark-black.png` — the cow-badge seal in ink, for light backgrounds.
- `logo-mark-white.png` — white knockout, for green / photo backgrounds.
- `logo-mark-green.png` — meadow-green tint, for white backgrounds.
- `images/` — real resident photos extracted from the current site:
  `bunny.png`, `lilah.png`, `gloria.png`, `cranky-portrait.png` (B&W).

The wordmark pairs the handwritten **"Cranky's"** (Caveat) with a small uppercase
**"Farm Animal Rescue Mission"** lockup; the circular seal sits beside or behind
it (e.g. overlapping the hero photo) as a hand-stamped mark.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point (imports only). Link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `readme.md` — this guide. · `SKILL.md` — portable skill manifest.

**Components** (`components/…`, exposed on `window.DesignSystem_5a631a`)
- `actions/` — **Button**, **IconButton**
- `content/` — **Card**, **Badge**, **Stat**, **SectionHeading**
- `forms/` — **Input**, **Checkbox**

Each directory has the `.jsx`, a `.d.ts` contract, a `.prompt.md` usage note, and
a `@dsCard` HTML specimen.

**UI kit** (`ui_kits/website/`)
- `index.html` — the refreshed, interactive homepage (Header, Hero, ImpactStrip,
  NewsGrid, CrankyQuote, ResidentsGrid, DonateBand, Footer, DonateModal). See its
  `README.md`.

**Foundation cards** (`guidelines/*.html`) — specimen cards for the Design System
tab: colour scales, type, spacing/radii/shadows, logo and photography.

---

## Caveats / open questions
- **Fonts are Google-Font substitutions** (Newsreader / Hanken Grotesk / Caveat) —
  please confirm or supply licensed brand fonts.
- **Logo & photos** are raster crops from the homepage screenshot — please supply
  vector logo art and high-resolution photography for production.
- The icon set is a Lucide-style **substitute**; adopt Lucide proper if preferred.
- Direction (palette evolution, accent, type personality) was chosen from sensible
  defaults — happy to dial it warmer/bolder/more faithful on request.
