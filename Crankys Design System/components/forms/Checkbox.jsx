import React from 'react';

let _cid = 0;

/**
 * Checkbox with label — newsletter consent, "I'd like to sponsor", etc.
 */
export function Checkbox({ label, id, checked, defaultChecked, className = '', ...rest }) {
  React.useEffect(() => {
    if (document.getElementById('cf-checkbox-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-checkbox-styles';
    el.textContent = `
      .cf-check { display: inline-flex; align-items: flex-start; gap: 0.6rem; cursor: pointer;
        font-family: var(--font-sans); font-size: var(--fs-body-sm); color: var(--text-body); line-height: 1.4; }
      .cf-check input { position: absolute; opacity: 0; width: 0; height: 0; }
      .cf-check__box { flex: none; width: 22px; height: 22px; margin-top: 1px;
        border: var(--border-w-2) solid var(--border-strong); border-radius: var(--radius-xs);
        background: var(--color-surface); display: inline-flex; align-items: center; justify-content: center;
        transition: background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out); }
      .cf-check__box svg { width: 14px; height: 14px; color: #fff; opacity: 0;
        transform: scale(0.6); transition: opacity var(--dur), transform var(--dur) var(--ease-out); }
      .cf-check input:checked + .cf-check__box { background: var(--color-primary); border-color: var(--color-primary); }
      .cf-check input:checked + .cf-check__box svg { opacity: 1; transform: scale(1); }
      .cf-check input:focus-visible + .cf-check__box { outline: var(--focus-width) solid var(--focus-ring); outline-offset: 2px; }
    `;
    document.head.appendChild(el);
  }, []);

  const fid = id || `cf-check-${++_cid}`;
  return (
    <label className={['cf-check', className].filter(Boolean).join(' ')} htmlFor={fid}>
      <input type="checkbox" id={fid} checked={checked} defaultChecked={defaultChecked} {...rest} />
      <span className="cf-check__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
      </span>
      <span>{label}</span>
    </label>
  );
}
