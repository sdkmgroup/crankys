import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  /** Error message — also switches the field to the error state. */
  error?: string;
  /** Leading icon node (inline SVG). */
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Input(props: InputProps): JSX.Element;
