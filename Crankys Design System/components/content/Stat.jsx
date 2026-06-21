import React from 'react';

/**
 * Impact statistic — a big number with a supporting label.
 * Used in the "our impact" strip. Pairs the serif for the figure
 * with a small uppercase label.
 */
export function Stat({ value, label, sublabel, tone = 'green', align = 'center', className = '', ...rest }) {
  React.useEffect(() => {
    if (document.getElementById('cf-stat-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-stat-styles';
    el.textContent = `
      .cf-stat { display: flex; flex-direction: column; gap: 0.25rem; }
      .cf-stat--center { align-items: center; text-align: center; }
      .cf-stat--start { align-items: flex-start; text-align: left; }
      .cf-stat__value {
        font-family: var(--font-serif); font-weight: var(--fw-semibold);
        font-size: clamp(2.5rem, 1.8rem + 2.4vw, 3.75rem);
        line-height: 1; letter-spacing: var(--ls-tight); color: var(--color-primary-strong);
      }
      .cf-stat--green .cf-stat__value  { color: var(--color-primary-strong); }
      .cf-stat--clay .cf-stat__value   { color: var(--clay-600); }
      .cf-stat--berry .cf-stat__value  { color: var(--color-donate); }
      .cf-stat--onDeep .cf-stat__value { color: var(--white); }
      .cf-stat__label {
        font-family: var(--font-sans); font-weight: var(--fw-bold);
        font-size: var(--fs-body-sm); color: var(--text-body);
      }
      .cf-stat--onDeep .cf-stat__label { color: var(--cream-100); }
      .cf-stat__sub { font-size: var(--fs-caption); color: var(--text-muted); }
      .cf-stat--onDeep .cf-stat__sub { color: var(--green-200); }
    `;
    document.head.appendChild(el);
  }, []);

  const cls = ['cf-stat', `cf-stat--${align}`, `cf-stat--${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className="cf-stat__value">{value}</span>
      {label && <span className="cf-stat__label">{label}</span>}
      {sublabel && <span className="cf-stat__sub">{sublabel}</span>}
    </div>
  );
}
