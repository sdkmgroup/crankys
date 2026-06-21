import * as React from 'react';

export interface StatProps {
  /** The figure, e.g. "500+" or "15 yrs". */
  value: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  tone?: 'green' | 'clay' | 'berry' | 'onDeep';
  align?: 'center' | 'start';
}

export function Stat(props: StatProps): JSX.Element;
