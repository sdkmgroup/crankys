import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'green' | 'urgent' | 'warm' | 'sun' | 'info' | 'neutral' | 'solid';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
