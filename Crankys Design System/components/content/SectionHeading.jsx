import React from 'react';

/**
 * Section heading — the brand's signature eyebrow + serif title
 * (+ optional lead) block that opens every page section.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
  onDark = false,
  size = 'md',
  className = '',
  as = 'h2',
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById('cf-heading-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-heading-styles';
    el.textContent = `
      .cf-heading { display: flex; flex-direction: column; gap: 0.6rem; max-width: 64ch; }
      .cf-heading--center { align-items: center; text-align: center; margin-inline: auto; }
      .cf-heading--start { align-items: flex-start; text-align: left; }
      .cf-heading__eyebrow { margin: 0; display: inline-flex; align-items: center; gap: 0.5em; }
      .cf-heading__eyebrow::after { content: ""; display: inline-block; width: 26px; height: 2px;
        background: var(--eyebrow); border-radius: 2px; opacity: 0.8; }
      .cf-heading--center .cf-heading__eyebrow::before { content: ""; display: inline-block; width: 26px; height: 2px;
        background: var(--eyebrow); border-radius: 2px; opacity: 0.8; }
      .cf-heading__title { font-family: var(--font-serif); font-weight: var(--fw-semibold);
        line-height: var(--lh-snug); letter-spacing: var(--ls-tight); color: var(--text-heading); margin: 0; text-wrap: balance; }
      .cf-heading--sm .cf-heading__title { font-size: var(--fs-h3); }
      .cf-heading--md .cf-heading__title { font-size: var(--fs-h2); }
      .cf-heading--lg .cf-heading__title { font-size: var(--fs-h1); }
      .cf-heading__lead { font-size: var(--fs-lead); color: var(--text-body); margin: 0; line-height: var(--lh-normal); text-wrap: pretty; }
      .cf-heading--onDark .cf-heading__title { color: var(--white); }
      .cf-heading--onDark .cf-heading__lead { color: var(--cream-100); }
      .cf-heading--onDark .cf-heading__eyebrow { color: var(--sun-300); }
      .cf-heading--onDark .cf-heading__eyebrow::after,
      .cf-heading--onDark .cf-heading__eyebrow::before { background: var(--sun-300); }
    `;
    document.head.appendChild(el);
  }, []);

  const Tag = as;
  const cls = [
    'cf-heading', `cf-heading--${align}`, `cf-heading--${size}`,
    onDark ? 'cf-heading--onDark' : '', className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} {...rest}>
      {eyebrow && <p className="cf-heading__eyebrow eyebrow">{eyebrow}</p>}
      {title && <Tag className="cf-heading__title">{title}</Tag>}
      {children && <p className="cf-heading__lead">{children}</p>}
    </div>
  );
}
