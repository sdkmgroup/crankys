import * as React from 'react';

export type ButtonVariant =
  | 'primary'    // meadow green — default action
  | 'donate'     // raspberry — the Donate / give action
  | 'warm'       // clay terracotta — secondary emphasis
  | 'secondary'  // green outline
  | 'ghost'      // quiet, text-like
  | 'onGreen';   // white button for use on green/photo surfaces

/**
 * @startingPoint section="Actions" subtitle="Primary, donate, warm, secondary & ghost buttons" viewport="700x340"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label / content. */
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon node (e.g. an inline Lucide SVG). */
  icon?: React.ReactNode;
  /** Render icon after the label instead of before. */
  iconRight?: boolean;
  /** Render as another element, e.g. 'a' for links. */
  as?: 'button' | 'a';
}

export function Button(props: ButtonProps): JSX.Element;
