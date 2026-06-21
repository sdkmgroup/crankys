import React from 'react';

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
export function Card({
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
  const cls = [
    'cf-card',
    elevation !== 'default' ? `cf-card--${elevation}` : '',
    interactive ? 'cf-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={cls} {...rest}>
      {image && (
        <div className="cf-card__media">
          <img src={image} alt={imageAlt} />
          {badge && <div className="cf-card__media-badge">{badge}</div>}
        </div>
      )}
      <div className="cf-card__body">
        {eyebrow && <p className="cf-card__eyebrow eyebrow">{eyebrow}</p>}
        {title && <h3 className="cf-card__title">{title}</h3>}
        {meta && <p className="cf-card__meta">{meta}</p>}
        {children && <p className="cf-card__text">{children}</p>}
        {footer && <div className="cf-card__footer">{footer}</div>}
      </div>
    </Tag>
  );
}
