/* @ds-bundle: {"format":3,"namespace":"DesignSystem_5a631a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"6c85d0ff9dcd","components/actions/IconButton.jsx":"ce88d90d483b","components/content/Badge.jsx":"3afd3bc52efd","components/content/Card.jsx":"258f08459370","components/content/SectionHeading.jsx":"c499c123ef31","components/content/Stat.jsx":"8dba14dd75be","components/forms/Checkbox.jsx":"391d5f3b240b","components/forms/Input.jsx":"1eb84128bd60","ui_kits/website/App.jsx":"0da07fc55227","ui_kits/website/CrankyQuote.jsx":"a459b888fd2e","ui_kits/website/DonateBand.jsx":"c49e7a9e487f","ui_kits/website/DonateModal.jsx":"683ef741f423","ui_kits/website/Footer.jsx":"f13012d6adae","ui_kits/website/Header.jsx":"42bcb15686c0","ui_kits/website/Hero.jsx":"f84bd8ad4c25","ui_kits/website/ImpactStrip.jsx":"ba172a672e68","ui_kits/website/NewsGrid.jsx":"7990870e5aae","ui_kits/website/ResidentsGrid.jsx":"1eaa4a537ebc","ui_kits/website/icons.jsx":"7a765756baed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_5a631a = window.DesignSystem_5a631a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['cf-btn', `cf-btn--${size}`, variant !== 'primary' ? `cf-btn--${variant}` : '', className].filter(Boolean).join(' ');
  const iconEl = icon ? /*#__PURE__*/React.createElement("span", {
    className: "cf-btn__icon",
    "aria-hidden": "true"
  }, icon) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), !iconRight && iconEl, children, iconRight && iconEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular / square icon-only button. Pairs with the same token
 * system as Button. Use for nav actions, close, social, etc.
 */
function IconButton({
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
  const cls = ['cf-iconbtn', `cf-iconbtn--${shape}`, `cf-iconbtn--${size}`, `cf-iconbtn--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category pill. Use sparingly to flag urgency,
 * category, or status on cards and lists.
 */
function Badge({
  children,
  tone = 'green',
  size = 'md',
  icon = null,
  className = '',
  ...rest
}) {
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
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCardStyles() {
  React.useEffect(() => {
    if (document.getElementById('cf-card-styles')) return;
    const el = document.createElement('style');
    el.id = 'cf-card-styles';
    el.textContent = `
      .cf-card {
        display: flex; flex-direction: column;
        background: var(--color-surface);
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: var(--border-card);
        box-shadow: var(--shadow-sm);
        transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
      }
      .cf-card--flat { box-shadow: none; }
      .cf-card--raised { box-shadow: var(--shadow-md); border-color: transparent; }
      .cf-card--interactive { cursor: pointer; }
      .cf-card--interactive:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
      .cf-card__media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: var(--color-surface-sunken); }
      .cf-card__media img { width: 100%; height: 100%; object-fit: cover; display: block;
        transition: transform var(--dur-slow) var(--ease-out); }
      .cf-card--interactive:hover .cf-card__media img { transform: scale(1.04); }
      .cf-card__media-badge { position: absolute; top: 12px; left: 12px; }
      .cf-card__body { display: flex; flex-direction: column; gap: 0.5rem; padding: var(--space-5); flex: 1; }
      .cf-card__eyebrow { margin: 0; }
      .cf-card__title { font-family: var(--font-serif); font-weight: var(--fw-semibold);
        font-size: var(--fs-h3); line-height: var(--lh-snug); color: var(--text-heading); margin: 0; }
      .cf-card__meta { font-size: var(--fs-caption); color: var(--text-muted); margin: 0; }
      .cf-card__text { font-size: var(--fs-body-sm); color: var(--text-body); margin: 0; }
      .cf-card__footer { margin-top: auto; padding-top: var(--space-2); }
    `;
    document.head.appendChild(el);
  }, []);
}

/**
 * Content card — news posts, resident profiles, events. Photo on
 * top, body below. Compose freely or use the convenience props.
 */
function Card({
  image,
  imageAlt = '',
  badge = null,
  eyebrow,
  title,
  meta,
  children,
  footer,
  elevation = 'default',
  interactive = false,
  as = 'div',
  className = '',
  ...rest
}) {
  useCardStyles();
  const Tag = as;
  const cls = ['cf-card', elevation !== 'default' ? `cf-card--${elevation}` : '', interactive ? 'cf-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    className: "cf-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }), badge && /*#__PURE__*/React.createElement("div", {
    className: "cf-card__media-badge"
  }, badge)), /*#__PURE__*/React.createElement("div", {
    className: "cf-card__body"
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cf-card__eyebrow eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "cf-card__title"
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    className: "cf-card__meta"
  }, meta), children && /*#__PURE__*/React.createElement("p", {
    className: "cf-card__text"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "cf-card__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading — the brand's signature eyebrow + serif title
 * (+ optional lead) block that opens every page section.
 */
function SectionHeading({
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
  const cls = ['cf-heading', `cf-heading--${align}`, `cf-heading--${size}`, onDark ? 'cf-heading--onDark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cf-heading__eyebrow eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement(Tag, {
    className: "cf-heading__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "cf-heading__lead"
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Impact statistic — a big number with a supporting label.
 * Used in the "our impact" strip. Pairs the serif for the figure
 * with a small uppercase label.
 */
function Stat({
  value,
  label,
  sublabel,
  tone = 'green',
  align = 'center',
  className = '',
  ...rest
}) {
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cf-stat__value"
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "cf-stat__label"
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    className: "cf-stat__sub"
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _cid = 0;

/**
 * Checkbox with label — newsletter consent, "I'd like to sponsor", etc.
 */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  className = '',
  ...rest
}) {
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
  return /*#__PURE__*/React.createElement("label", {
    className: ['cf-check', className].filter(Boolean).join(' '),
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fid,
    checked: checked,
    defaultChecked: defaultChecked
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cf-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/**
 * Text input with optional label, helper/error text and leading icon.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cf-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cf-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "cf-field__icon",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    className: inputCls
  }, rest))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    className: "cf-field__helper"
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* App — composes the refreshed Cranky's FARM homepage. */
function App() {
  const [donateOpen, setDonateOpen] = React.useState(false);
  const openDonate = React.useCallback(() => setDonateOpen(true), []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Header, {
    onDonate: openDonate
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, {
    onDonate: openDonate
  }), /*#__PURE__*/React.createElement(window.ImpactStrip, null), /*#__PURE__*/React.createElement(window.NewsGrid, null), /*#__PURE__*/React.createElement(window.CrankyQuote, null), /*#__PURE__*/React.createElement(window.ResidentsGrid, {
    onDonate: openDonate
  }), /*#__PURE__*/React.createElement(window.DonateBand, {
    onDonate: openDonate
  })), /*#__PURE__*/React.createElement(window.Footer, null), /*#__PURE__*/React.createElement(window.DonateModal, {
    open: donateOpen,
    onClose: () => setDonateOpen(false)
  }));
}

/* Wait for the compiled DS bundle to define its namespace before mounting,
   so timing between the plain bundle script and Babel's transform pass
   can never leave components reading an undefined namespace. */
(function mount() {
  if (!window.DesignSystem_5a631a) {
    setTimeout(mount, 20);
    return;
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CrankyQuote.jsx
try { (() => {
/* Meet Cranky — emotive B&W portrait + pull quote. */
function CrankyQuote() {
  const {
    Button: CqButton
  } = window.DesignSystem_5a631a;
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-section ck-cranky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container ck-cranky__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-cranky__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/cranky-portrait.png",
    alt: "Cranky, the steer the sanctuary is named after"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ck-cranky__caption script"
  }, "\u2026the one who started it all")), /*#__PURE__*/React.createElement("div", {
    className: "ck-cranky__copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Meet Cranky"), /*#__PURE__*/React.createElement("span", {
    className: "ck-cranky__qmark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(window.Quote, null)), /*#__PURE__*/React.createElement("blockquote", {
    className: "ck-cranky__quote"
  }, "He would change our lives forever."), /*#__PURE__*/React.createElement("p", {
    className: "ck-cranky__text"
  }, "Cranky arrived at our property with two other dairy steers in February 2010. They had spent the first three months of their lives as part of a mobile petting zoo. What people don't realise \u2014 just like we didn't \u2014 is that the lives of those cute baby animals are typically very short."), /*#__PURE__*/React.createElement(CqButton, {
    variant: "warm",
    icon: /*#__PURE__*/React.createElement(window.ArrowRight, null),
    iconRight: true
  }, "Read Cranky's story"))));
}
window.CrankyQuote = CrankyQuote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CrankyQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonateBand.jsx
try { (() => {
/* Donate band — deep green CTA + ways to help. */
function DonateBand({
  onDonate
}) {
  const {
    Button: DButton,
    SectionHeading: DHeading
  } = window.DesignSystem_5a631a;
  const ways = [{
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    title: 'Make a donation',
    text: 'One-off or monthly — every dollar feeds and treats a rescued animal.'
  }, {
    icon: /*#__PURE__*/React.createElement(window.PawIcon, null),
    title: 'Sponsor a resident',
    text: 'Cover the ongoing care of a Cranky Resident and follow their journey.'
  }, {
    icon: /*#__PURE__*/React.createElement(window.ShieldHeart, null),
    title: 'Adopt or foster',
    text: 'Give an animal needing a home a safe, loving place to land.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-section ck-donate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container ck-donate__inner"
  }, /*#__PURE__*/React.createElement(DHeading, {
    eyebrow: "Please help",
    title: "Help us help them",
    onDark: true,
    align: "start",
    size: "lg"
  }, "We rely entirely on the kindness of our community. Choose the way that suits you \u2014 it all keeps these gentle animals safe."), /*#__PURE__*/React.createElement("div", {
    className: "ck-donate__ways"
  }, ways.map(w => /*#__PURE__*/React.createElement("div", {
    className: "ck-way",
    key: w.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-way__icon"
  }, w.icon), /*#__PURE__*/React.createElement("h3", {
    className: "ck-way__title"
  }, w.title), /*#__PURE__*/React.createElement("p", {
    className: "ck-way__text"
  }, w.text)))), /*#__PURE__*/React.createElement("div", {
    className: "ck-donate__cta"
  }, /*#__PURE__*/React.createElement(DButton, {
    variant: "onGreen",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    onClick: onDonate
  }, "Donate now"), /*#__PURE__*/React.createElement(DButton, {
    variant: "ghost",
    size: "lg",
    className: "ck-donate__ghost",
    icon: /*#__PURE__*/React.createElement(window.ArrowRight, null),
    iconRight: true
  }, "Other ways to give"))));
}
window.DonateBand = DonateBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonateModal.jsx
try { (() => {
/* Donate modal — interactive give flow using DS components. */
function DonateModal({
  open,
  onClose
}) {
  const {
    Button: MButton,
    Input: MInput,
    Checkbox: MCheck
  } = window.DesignSystem_5a631a;
  const [freq, setFreq] = React.useState('monthly');
  const [amount, setAmount] = React.useState(30);
  const [custom, setCustom] = React.useState('');
  const [done, setDone] = React.useState(false);
  const presets = [15, 30, 50, 100];
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const value = custom ? Number(custom) : amount;
  return /*#__PURE__*/React.createElement("div", {
    className: "ck-modal",
    onMouseDown: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-modal__panel",
    onMouseDown: e => e.stopPropagation(),
    role: "dialog",
    "aria-label": "Donate"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ck-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(window.CloseIcon, null)), done ? /*#__PURE__*/React.createElement("div", {
    className: "ck-modal__thanks"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-modal__thankicon"
  }, /*#__PURE__*/React.createElement(window.HeartIcon, null)), /*#__PURE__*/React.createElement("h2", null, "Thank you", value ? `, that's $${value}` : '', " \uD83D\uDC9A"), /*#__PURE__*/React.createElement("p", null, "Your ", freq === 'monthly' ? 'monthly ' : '', "gift helps keep our residents safe, fed and cared for. We'll send you updates from the farm."), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    onClick: onClose
  }, "Back to the farm")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Make a donation"), /*#__PURE__*/React.createElement("h2", {
    className: "ck-modal__title"
  }, "Give a gentle life a chance"), /*#__PURE__*/React.createElement("div", {
    className: "ck-seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ck-seg__opt' + (freq === 'once' ? ' is-on' : ''),
    onClick: () => setFreq('once')
  }, "One-off"), /*#__PURE__*/React.createElement("button", {
    className: 'ck-seg__opt' + (freq === 'monthly' ? ' is-on' : ''),
    onClick: () => setFreq('monthly')
  }, "Monthly")), /*#__PURE__*/React.createElement("div", {
    className: "ck-amounts"
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: 'ck-amt' + (!custom && amount === p ? ' is-on' : ''),
    onClick: () => {
      setAmount(p);
      setCustom('');
    }
  }, "$", p))), /*#__PURE__*/React.createElement(MInput, {
    "aria-label": "Custom amount",
    placeholder: "Other amount ($)",
    type: "number",
    min: "1",
    value: custom,
    onChange: e => setCustom(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-modal__fields"
  }, /*#__PURE__*/React.createElement(MInput, {
    label: "Your name",
    placeholder: "Jane Appleseed",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null)
  }), /*#__PURE__*/React.createElement(MInput, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    icon: /*#__PURE__*/React.createElement(window.MailIcon, null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 18px'
    }
  }, /*#__PURE__*/React.createElement(MCheck, {
    label: "Send me rescue stories and updates from the residents",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(MButton, {
    variant: "donate",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    onClick: () => setDone(true),
    className: "ck-modal__submit"
  }, "Donate $", value || 0, freq === 'monthly' ? ' / month' : ''), /*#__PURE__*/React.createElement("p", {
    className: "ck-modal__fine"
  }, "Secure demo form \xB7 100% of your gift goes to animal care."))));
}
window.DonateModal = DonateModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer — newsletter + menu + brand. */
function Footer() {
  const {
    Button: FButton,
    Input: FInput,
    IconButton: FIcon
  } = window.DesignSystem_5a631a;
  return /*#__PURE__*/React.createElement("footer", {
    className: "ck-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container ck-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: "Cranky's FARM",
    className: "ck-footer__logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "ck-footer__about"
  }, "Cranky's FARM is a registered charity which rescues and cares for abused, neglected and unwanted farm animals."), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__social"
  }, /*#__PURE__*/React.createElement(FIcon, {
    label: "Facebook",
    variant: "outline",
    className: "ck-social"
  }, /*#__PURE__*/React.createElement(window.Facebook, null)), /*#__PURE__*/React.createElement(FIcon, {
    label: "Instagram",
    variant: "outline",
    className: "ck-social"
  }, /*#__PURE__*/React.createElement(window.Instagram, null)))), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__col"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "ck-footer__h"
  }, "Explore"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About & Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Our Residents")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Animals needing homes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Shop")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Events")))), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__news"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "ck-footer__h"
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("p", {
    className: "ck-footer__newscopy"
  }, "Rescue stories and event news, straight to your inbox."), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__form"
  }, /*#__PURE__*/React.createElement(FInput, {
    type: "email",
    placeholder: "you@example.com",
    "aria-label": "Email address",
    icon: /*#__PURE__*/React.createElement(window.MailIcon, null)
  }), /*#__PURE__*/React.createElement(FButton, {
    variant: "onGreen",
    icon: /*#__PURE__*/React.createElement(window.ArrowRight, null),
    iconRight: true
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container ck-footer__bottominner"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Cranky's FARM Animal Rescue Mission Ltd"), /*#__PURE__*/React.createElement("span", null, "Registered charity \xB7 Made with care"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Cranky's FARM — site header / nav. Exports Header to window. */
function Header({
  onDonate
}) {
  const {
    Button,
    IconButton
  } = window.DesignSystem_5a631a;
  const [open, setOpen] = React.useState(false);
  const links = ['Home', 'About', 'Our Residents', 'Adopt', 'News', 'Events', 'Shop'];
  return /*#__PURE__*/React.createElement("header", {
    className: "ck-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ck-brand",
    href: "#top",
    "aria-label": "Cranky's FARM home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-green.png",
    alt: "",
    className: "ck-brand__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__word"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__name"
  }, "Cranky's"), /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__sub"
  }, "Farm Animal Rescue Mission"))), /*#__PURE__*/React.createElement("nav", {
    className: "ck-nav",
    "aria-label": "Primary"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: 'ck-nav__link' + (i === 0 ? ' is-active' : ''),
    onClick: e => e.preventDefault()
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "ck-header__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    onClick: onDonate,
    className: "ck-header__donate"
  }, "Donate"), /*#__PURE__*/React.createElement(IconButton, {
    label: open ? 'Close menu' : 'Open menu',
    variant: "outline",
    className: "ck-menu-toggle",
    onClick: () => setOpen(o => !o)
  }, open ? /*#__PURE__*/React.createElement(window.CloseIcon, null) : /*#__PURE__*/React.createElement(window.MenuIcon, null)))), open && /*#__PURE__*/React.createElement("div", {
    className: "ck-mobile-nav"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: 'ck-mobile-nav__link' + (i === 0 ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      setOpen(false);
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    onClick: () => {
      setOpen(false);
      onDonate();
    }
  }, "Donate")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — refreshed editorial hero with image + floating sponsor card. */
function Hero({
  onDonate
}) {
  const {
    Button: HButton
  } = window.DesignSystem_5a631a;
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__blob",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow ck-hero__eyebrow"
  }, "Farm animal rescue \xB7 Est. 2010"), /*#__PURE__*/React.createElement("h1", {
    className: "ck-hero__title"
  }, "Every animal deserves a ", /*#__PURE__*/React.createElement("em", null, "gentle"), " life."), /*#__PURE__*/React.createElement("p", {
    className: "ck-hero__lead"
  }, "Cranky's FARM is a registered charity caring for unwanted, neglected and abused farm animals. We give them safety, vet care and a home for life \u2014 and we need your help to keep going and growing."), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__cta"
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "donate",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
    onClick: onDonate
  }, "Donate today"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(window.PawIcon, null)
  }, "Meet the residents")), /*#__PURE__*/React.createElement("p", {
    className: "ck-hero__note"
  }, "100% of donations go straight to animal care.")), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/bunny.png",
    alt: "Bunny, a rescued goat kid, being cradled at Cranky's FARM"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__badge"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-green.png",
    alt: "Cranky's FARM seal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-hero__stat-num"
  }, "500+"), /*#__PURE__*/React.createElement("span", {
    className: "ck-hero__stat-lab"
  }, "animals rescued", /*#__PURE__*/React.createElement("br", null), "since 2010")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ImpactStrip.jsx
try { (() => {
/* Impact strip — green band of Stats. */
function ImpactStrip() {
  const {
    Stat
  } = window.DesignSystem_5a631a;
  const items = [{
    value: '500+',
    label: 'Animals rescued',
    sub: 'since 2010'
  }, {
    value: '15 yrs',
    label: 'Caring for farm animals',
    sub: 'and counting'
  }, {
    value: '30+',
    label: 'Permanent residents',
    sub: 'safe for life'
  }, {
    value: '100%',
    label: 'Of donations to care',
    sub: 'every cent'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-impact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-impact__inner"
  }, items.map(it => /*#__PURE__*/React.createElement(Stat, {
    key: it.label,
    value: it.value,
    label: it.label,
    sublabel: it.sub,
    tone: "onDeep"
  }))));
}
window.ImpactStrip = ImpactStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ImpactStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsGrid.jsx
try { (() => {
/* Latest news — SectionHeading + 3 Cards. */
function NewsGrid() {
  const {
    Card: NCard,
    Badge: NBadge,
    Button: NButton,
    SectionHeading: NHeading
  } = window.DesignSystem_5a631a;
  const posts = [{
    img: '../../assets/images/cranky-portrait.png',
    bw: true,
    badge: /*#__PURE__*/React.createElement(NBadge, {
      tone: "urgent"
    }, "Urgent appeal"),
    eyebrow: 'Rescue appeal',
    title: 'Help save Ferdinand from the sales',
    meta: 'By Natalie · 12 Oct 2025',
    text: 'A gentle six-year-old bull came into our care facing the terrifying prospect of the cattle sales. Thanks to an incredible community, he is safe — but his recovery has only begun.'
  }, {
    img: '../../assets/images/bunny.png',
    badge: /*#__PURE__*/React.createElement(NBadge, {
      tone: "warm",
      icon: /*#__PURE__*/React.createElement(window.PawIcon, null)
    }, "New arrival"),
    eyebrow: 'Rescue story',
    title: "Bunny's story",
    meta: 'By Natalie · 4 Oct 2025',
    text: 'We were contacted by friends who had taken in a tiny goat needing specialist care. Bunny is settling in beautifully — and learning that humans can be gentle.'
  }, {
    img: '../../assets/images/gloria.png',
    badge: /*#__PURE__*/React.createElement(NBadge, {
      tone: "sun",
      icon: /*#__PURE__*/React.createElement(window.Calendar, null)
    }, "Event"),
    eyebrow: 'Save the date',
    title: 'Trivia Night 2025',
    meta: 'By Natalie · 6 Sep 2025',
    text: 'Join us Saturday 20 September from 6:30pm at the Northern Suburbs Bowls Club for a fun-filled night of trivia, prizes and food — all for a great cause.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-section ck-news"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-section__head"
  }, /*#__PURE__*/React.createElement(NHeading, {
    eyebrow: "Latest news",
    title: "Stories from the farm",
    align: "start"
  }, "Every rescue has a story. Here are the latest updates from our residents and our community."), /*#__PURE__*/React.createElement(NButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(window.ArrowRight, null),
    iconRight: true,
    className: "ck-viewall"
  }, "View all posts")), /*#__PURE__*/React.createElement("div", {
    className: "ck-news__grid"
  }, posts.map(p => /*#__PURE__*/React.createElement(NCard, {
    key: p.title,
    image: p.img,
    imageAlt: p.title,
    badge: p.badge,
    eyebrow: p.eyebrow,
    title: p.title,
    meta: p.meta,
    interactive: true,
    className: p.bw ? 'ck-card-bw' : '',
    footer: /*#__PURE__*/React.createElement(NButton, {
      size: "sm",
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(window.ArrowRight, null),
      iconRight: true
    }, "Read more")
  }, p.text)))));
}
window.NewsGrid = NewsGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResidentsGrid.jsx
try { (() => {
/* Residents grid — sponsorable resident cards. */
function ResidentsGrid({
  onDonate
}) {
  const {
    Card: RCard,
    Badge: RBadge,
    Button: RButton,
    SectionHeading: RHeading
  } = window.DesignSystem_5a631a;
  const residents = [{
    img: '../../assets/images/bunny.png',
    name: 'Bunny',
    kind: 'Goat · arrived 2025',
    badge: /*#__PURE__*/React.createElement(RBadge, {
      tone: "warm"
    }, "Needs a sponsor"),
    text: 'A tiny, curious goat with the gentlest eyes. Bunny needs ongoing care as she grows up safe.'
  }, {
    img: '../../assets/images/lilah.png',
    name: 'Lilah',
    kind: 'Goat · rescued',
    badge: /*#__PURE__*/React.createElement(RBadge, {
      tone: "green"
    }, "Resident"),
    text: 'Lilah spent her young life with no other goats for company. Now she has a whole herd of friends.'
  }, {
    img: '../../assets/images/cranky-portrait.png',
    name: 'Cranky',
    kind: 'Steer · since 2010',
    bw: true,
    badge: /*#__PURE__*/React.createElement(RBadge, {
      tone: "neutral"
    }, "Forever loved"),
    text: 'The gentle soul our sanctuary is named after — and the reason every resident here has a home for life.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ck-section ck-residents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-container"
  }, /*#__PURE__*/React.createElement(RHeading, {
    eyebrow: "Meet the residents",
    title: "The Cranky Residents"
  }, "Sponsor a resident and you'll cover their hay, vet care and daily comfort \u2014 and get updates on the friend you're helping."), /*#__PURE__*/React.createElement("div", {
    className: "ck-residents__grid"
  }, residents.map(r => /*#__PURE__*/React.createElement(RCard, {
    key: r.name,
    image: r.img,
    imageAlt: r.name,
    badge: r.badge,
    eyebrow: r.kind,
    title: r.name,
    interactive: true,
    className: r.bw ? 'ck-card-bw' : '',
    footer: /*#__PURE__*/React.createElement(RButton, {
      size: "sm",
      variant: "donate",
      icon: /*#__PURE__*/React.createElement(window.HeartIcon, null),
      onClick: onDonate
    }, "Sponsor ", r.name)
  }, r.text))), /*#__PURE__*/React.createElement("div", {
    className: "ck-residents__more"
  }, /*#__PURE__*/React.createElement(RButton, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(window.PawIcon, null)
  }, "Meet all the residents"))));
}
window.ResidentsGrid = ResidentsGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResidentsGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cranky's FARM — inline icon set (Lucide-style, 2px round stroke).
   Loaded as a babel script; exports to window for sibling scripts. */
const S = ({
  children,
  fill = 'none',
  sw = 2,
  ...p
}) => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: fill === 'none' ? 'currentColor' : 'none',
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), children);
const HeartIcon = p => /*#__PURE__*/React.createElement(S, _extends({
  fill: "currentColor"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.9 5.3 4.6 7.4 4.4 9 5.6 12 8.2c3-2.6 4.6-3.8 6.7-3.6C22 4.9 23.6 8.4 22 11.7 19.5 16.3 12 21 12 21Z"
}));
const PawIcon = p => /*#__PURE__*/React.createElement(S, _extends({
  fill: "currentColor"
}, p), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "10",
  r: "1.9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10.3",
  cy: "6.6",
  r: "1.9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.7",
  cy: "6.6",
  r: "1.9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "10",
  r: "1.9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11c2.5 0 5 2.2 5 4.6 0 1.8-1.6 2.4-3 2.4-1 0-1.6-.4-2-.4s-1 .4-2 .4c-1.4 0-3-.6-3-2.4C7 13.2 9.5 11 12 11Z"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(S, _extends({
  sw: 2.4
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const MenuIcon = p => /*#__PURE__*/React.createElement(S, _extends({
  sw: 2.2
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M4 7h16M4 12h16M4 17h16"
}));
const CloseIcon = p => /*#__PURE__*/React.createElement(S, _extends({
  sw: 2.3
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MailIcon = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const MapPin = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Calendar = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "17",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18M8 2v4M16 2v4"
}));
const Sprout = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 20h10M12 20v-8M12 12C12 8 9 6 4 6c0 4 3 6 8 6ZM12 12c0-3 2-5 6-5 0 3-2 5-6 5Z"
}));
const Quote = p => /*#__PURE__*/React.createElement(S, _extends({
  fill: "currentColor"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M7 7C5 8 4 10 4 13v4h6v-7H6c.2-1.4 1-2.3 2-3Zm10 0c-2 1-3 3-3 6v4h6v-7h-4c.2-1.4 1-2.3 2-3Z"
}));
const Facebook = p => /*#__PURE__*/React.createElement(S, _extends({
  fill: "currentColor"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"
}));
const Instagram = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1",
  fill: "currentColor",
  stroke: "none"
}));
const ShieldHeart = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15s-3-1.8-3-3.8c0-1 .8-1.7 1.7-1.7.7 0 1.1.4 1.3.7.2-.3.6-.7 1.3-.7.9 0 1.7.7 1.7 1.7C15 13.2 12 15 12 15Z"
}));
const Home = p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 11l8-6 8 6M6 10v9h12v-9"
}));
const Check = p => /*#__PURE__*/React.createElement(S, _extends({
  sw: 3
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 7"
}));
Object.assign(window, {
  HeartIcon,
  PawIcon,
  ArrowRight,
  MenuIcon,
  CloseIcon,
  MailIcon,
  MapPin,
  Calendar,
  Sprout,
  Quote,
  Facebook,
  Instagram,
  ShieldHeart,
  Home,
  Check
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
