import * as React from 'react';

export interface SectionHeadingProps {
  /** Small uppercase overline above the title. */
  eyebrow?: string;
  title?: React.ReactNode;
  /** Optional lead paragraph below the title. */
  children?: React.ReactNode;
  align?: 'center' | 'start';
  /** Use light text for placement on green/photo backgrounds. */
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
