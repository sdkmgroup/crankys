import * as React from 'react';

/**
 * @startingPoint section="Content" subtitle="Photo content card for news & residents" viewport="700x620"
 */
export interface CardProps {
  /** Top media image URL. */
  image?: string;
  imageAlt?: string;
  /** Node rendered over the image, top-left (e.g. a Badge). */
  badge?: React.ReactNode;
  /** Small uppercase overline. */
  eyebrow?: string;
  /** Serif card title. */
  title?: React.ReactNode;
  /** Muted meta line (author, date). */
  meta?: string;
  /** Body text / excerpt. */
  children?: React.ReactNode;
  /** Footer node, e.g. a Button. */
  footer?: React.ReactNode;
  elevation?: 'default' | 'flat' | 'raised';
  /** Hover lift + image zoom. */
  interactive?: boolean;
  as?: 'div' | 'article' | 'a';
}

export function Card(props: CardProps): JSX.Element;
