import React from 'react';

/* Injects the component stylesheet once. Uses design-system tokens. */
function useButtonStyles() {
  React.useEffect(() => {
    if (document.getElementById('cf-button-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-button-styles';
    el.textContent = `
      .cf-btn {
        --_bg: var(--color-primary);
        --_fg: var(--text-on-green);
        --_bg-hover: var(--color-primary-strong);
        --_shadow: var(--shadow-green);
        font-family: var(--font-sans);
        font-weight: var(--fw-bold);
        letter-spacing: 0.01em;
        display: inline-flex; align-items: center; justify-content: center;
        gap: 0.55em;
        border: 0; cursor: pointer;
        background: var(--_bg); color: var(--_fg);
        border-radius: var(--radius-pill);
        line-height: 1;
        text-decoration: none; white-space: nowrap;
        transition: background var(--dur) var(--ease-out),
                    transform var(--dur-fast) var(--ease-out),
                    box-shadow var(--dur) var(--ease-out);
        box-shadow: var(--_shadow);
      }
      .cf-btn:hover { background: var(--_bg-hover); }
      .cf-btn:active { transform: translateY(1px) scale(0.985); }
      .cf-btn:focus-visible { outline: var(--focus-width) solid var(--focus-ring); outline-offset: var(--focus-offset); }
      .cf-btn[disabled] { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
      .cf-btn[disabled]:active { transform: none; }

      /* sizes */
      .cf-btn--sm { font-size: var(--fs-body-sm); padding: 0.55rem 1.1rem; }
      .cf-btn--md { font-size: var(--fs-body); padding: 0.8rem 1.6rem; }
      .cf-btn--lg { font-size: 1.15rem; padding: 1.05rem 2.1rem; }

      /* variants */
      .cf-btn--donate { --_bg: var(--color-donate); --_bg-hover: var(--color-donate-strong); --_shadow: var(--shadow-donate); }
      .cf-btn--warm   { --_bg: var(--color-accent-warm); --_bg-hover: var(--clay-600); --_shadow: var(--shadow-md); }
      .cf-btn--secondary {
        --_bg: transparent; --_fg: var(--color-primary-strong);
        box-shadow: inset 0 0 0 var(--border-w-2) var(--color-primary);
      }
      .cf-btn--secondary:hover { --_bg: var(--color-primary-soft); }
      .cf-btn--ghost {
        --_bg: transparent; --_fg: var(--text-body); box-shadow: none;
      }
      .cf-btn--ghost:hover { --_bg: var(--color-surface-sunken); }
      .cf-btn--onGreen {
        --_bg: var(--white); --_fg: var(--green-700); --_bg-hover: var(--cream-100); --_shadow: var(--shadow-md);
      }
      .cf-btn__icon { display: inline-flex; width: 1.1em; height: 1.1em; }
      .cf-btn__icon svg { width: 100%; height: 100%; display: block; }
    `;
    document.head.appendChild(el);
  }, []);
}

/**
 * Primary call-to-action button for Cranky's FARM.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = false,
  as = 'button',
  className = '',
  ...rest
}) {
  useButtonStyles();
  const Tag = as;
  const cls = [
    'cf-btn',
    `cf-btn--${size}`,
    variant !== 'primary' ? `cf-btn--${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  const iconEl = icon ? <span className="cf-btn__icon" aria-hidden="true">{icon}</span> : null;

  return (
    <Tag className={cls} {...rest}>
      {!iconRight && iconEl}
      {children}
      {iconRight && iconEl}
    </Tag>
  );
}
