One-line: The primary call-to-action button — green for general actions, raspberry for Donate, plus warm/secondary/ghost variants for hierarchy.

```jsx
<Button variant="donate" size="lg" icon={<HeartIcon/>}>Donate</Button>
<Button>Read more</Button>
<Button variant="secondary">Meet the residents</Button>
<Button variant="onGreen">About us</Button>
```

Variants: `primary` (meadow green, default) · `donate` (raspberry, reserve for giving) · `warm` (clay) · `secondary` (green outline) · `ghost` (quiet) · `onGreen` (white, for photo/green backgrounds).
Sizes: `sm` · `md` · `lg`. Pass `icon` (inline SVG, e.g. Lucide) and `iconRight` to position it. Use `as="a"` with `href` for link buttons. All buttons are pill-shaped by brand convention.
