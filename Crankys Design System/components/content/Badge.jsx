import React from 'react';

/**
 * Small status / category pill. Use sparingly to flag urgency,
 * category, or status on cards and lists.
 */
export function Badge({ children, tone = 'green', size = 'md', icon = null, className = '', ...rest }) {
  React.useEffect(() => {
    if (document.getElementById('cf-badge-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-badge-styles';
    el.textContent = `
      .cf-badge {
        --_bg: var(--green-100); --_fg: var(--green-800);
        display: inline-flex; align-items: center; gap: 0.4em;
        font-family: var(--font-sans); font-weight: var(--fw-bold);
        letter-spacing: 0.04em; text-transform: uppercase;
        background: var(--_bg); color: var(--_fg);
        border-radius: var(--radius-pill); line-height: 1; white-space: nowrap;
      }
      .cf-badge--sm { font-size: 0.66rem; padding: 0.34em 0.7em; }
      .cf-badge--md { font-size: 0.72rem; padding: 0.45em 0.85em; }
      .cf-badge--green   { --_bg: var(--green-100);  --_fg: var(--green-800); }
      .cf-badge--urgent  { --_bg: var(--berry-100);  --_fg: var(--berry-700); }
      .cf-badge--warm    { --_bg: var(--clay-100);   --_fg: var(--clay-600); }
      .cf-badge--sun     { --_bg: #fdf0cf;           --_fg: #9a6a07; }
      .cf-badge--info    { --_bg: #dceaf3;           --_fg: #2b5e84; }
      .cf-badge--neutral { --_bg: var(--cream-200);  --_fg: var(--ink-700); }
      .cf-badge--solid   { --_bg: var(--color-donate); --_fg: #fff; }
      .cf-badge svg { width: 1em; height: 1em; display: block; }
    `;
    document.head.appendChild(el);
  }, []);

  const cls = ['cf-badge', `cf-badge--${size}`, `cf-badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {icon && <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
}
