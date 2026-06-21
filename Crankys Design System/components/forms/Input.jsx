import React from 'react';

let _id = 0;

/**
 * Text input with optional label, helper/error text and leading icon.
 */
export function Input({
  label,
  type = 'text',
  helper,
  error,
  icon = null,
  size = 'md',
  id,
  className = '',
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById('cf-input-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-input-styles';
    el.textContent = `
      .cf-field { display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-sans); }
      .cf-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-bold); color: var(--text-strong); }
      .cf-field__wrap { position: relative; display: flex; align-items: center; }
      .cf-field__icon { position: absolute; left: 0.95rem; display: inline-flex; color: var(--text-muted); pointer-events: none; }
      .cf-field__icon svg { width: 1.15em; height: 1.15em; display: block; }
      .cf-input {
        width: 100%; font-family: inherit; font-size: var(--fs-body);
        color: var(--text-strong); background: var(--color-surface);
        border: var(--border-w-2) solid var(--border);
        border-radius: var(--radius-md);
        transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur);
      }
      .cf-input::placeholder { color: var(--ink-400); }
      .cf-input--sm { padding: 0.55rem 0.85rem; }
      .cf-input--md { padding: 0.8rem 1rem; }
      .cf-input--lg { padding: 1rem 1.15rem; font-size: var(--fs-lead); }
      .cf-input--hasicon { padding-left: 2.7rem; }
      .cf-input:hover { border-color: var(--border-strong); }
      .cf-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--green-100); background: var(--white); }
      .cf-field--error .cf-input { border-color: var(--danger); }
      .cf-field--error .cf-input:focus { box-shadow: 0 0 0 3px rgba(192,67,47,0.16); }
      .cf-field__helper { font-size: var(--fs-caption); color: var(--text-muted); }
      .cf-field--error .cf-field__helper { color: var(--danger); }
    `;
    document.head.appendChild(el);
  }, []);

  const fid = id || `cf-input-${++_id}`;
  const cls = ['cf-field', error ? 'cf-field--error' : '', className].filter(Boolean).join(' ');
  const inputCls = ['cf-input', `cf-input--${size}`, icon ? 'cf-input--hasicon' : ''].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {label && <label className="cf-field__label" htmlFor={fid}>{label}</label>}
      <div className="cf-field__wrap">
        {icon && <span className="cf-field__icon" aria-hidden="true">{icon}</span>}
        <input id={fid} type={type} className={inputCls} {...rest} />
      </div>
      {(error || helper) && <span className="cf-field__helper">{error || helper}</span>}
    </div>
  );
}
