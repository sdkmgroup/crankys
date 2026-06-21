import React from 'react';

/**
 * Circular / square icon-only button. Pairs with the same token
 * system as Button. Use for nav actions, close, social, etc.
 */
export function IconButton({
  children,
  label,
  variant = 'soft',
  size = 'md',
  shape = 'circle',
  className = '',
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById('cf-iconbutton-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-iconbutton-styles';
    el.textContent = `
      .cf-iconbtn {
        --_bg: var(--color-surface-sunken);
        --_fg: var(--text-body);
        --_bg-hover: var(--cream-200);
        display: inline-flex; align-items: center; justify-content: center;
        border: 0; cursor: pointer; padding: 0;
        background: var(--_bg); color: var(--_fg);
        transition: background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out);
      }
      .cf-iconbtn:hover { background: var(--_bg-hover); }
      .cf-iconbtn:active { transform: scale(0.92); }
      .cf-iconbtn:focus-visible { outline: var(--focus-width) solid var(--focus-ring); outline-offset: var(--focus-offset); }
      .cf-iconbtn--circle { border-radius: var(--radius-circle); }
      .cf-iconbtn--rounded { border-radius: var(--radius-md); }
      .cf-iconbtn--sm { width: 36px; height: 36px; }
      .cf-iconbtn--md { width: 44px; height: 44px; }
      .cf-iconbtn--lg { width: 54px; height: 54px; }
      .cf-iconbtn--primary { --_bg: var(--color-primary); --_fg: var(--text-on-green); --_bg-hover: var(--color-primary-strong); }
      .cf-iconbtn--donate  { --_bg: var(--color-donate); --_fg: #fff; --_bg-hover: var(--color-donate-strong); }
      .cf-iconbtn--outline { --_bg: transparent; box-shadow: inset 0 0 0 var(--border-w-2) var(--border-strong); --_bg-hover: var(--color-surface-sunken); }
      .cf-iconbtn svg { width: 48%; height: 48%; display: block; }
    `;
    document.head.appendChild(el);
  }, []);

  const cls = [
    'cf-iconbtn',
    `cf-iconbtn--${shape}`,
    `cf-iconbtn--${size}`,
    `cf-iconbtn--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
