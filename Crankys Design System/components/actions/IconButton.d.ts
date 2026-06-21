import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon node (inline SVG). */
  children?: React.ReactNode;
  /** Accessible label (required — icon-only). */
  label: string;
  variant?: 'soft' | 'primary' | 'donate' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'rounded';
}

export function IconButton(props: IconButtonProps): JSX.Element;
