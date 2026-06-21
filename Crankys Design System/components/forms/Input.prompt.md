One-line: Text input with optional label, leading icon, and helper/error text — for newsletter sign-up, contact and donation forms.

```jsx
<Input label="Email address" type="email" placeholder="you@example.com" icon={<MailIcon/>} />
<Input label="Amount" defaultValue="50" error="Please enter at least $5" />
```

Sizes `sm|md|lg`. Passing `error` switches the field to the error state and shows the message in place of `helper`.
