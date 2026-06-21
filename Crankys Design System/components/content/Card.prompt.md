One-line: Photo content card for news posts, resident profiles and events — image on top, eyebrow/title/meta/excerpt/footer below.

```jsx
<Card
  image="/assets/images/bunny.png"
  badge={<Badge tone="urgent">Urgent</Badge>}
  eyebrow="Rescue story"
  title="Bunny's story"
  meta="By Natalie · 4 Oct 2025"
  interactive
  footer={<Button size="sm">Read more</Button>}
>
  On 4 October 2025 we were contacted by friends who'd taken in a tiny goat…
</Card>
```

`elevation`: `default` (subtle) · `flat` · `raised`. Set `interactive` for hover lift + image zoom. Every prop is optional — compose custom bodies via `children`.
