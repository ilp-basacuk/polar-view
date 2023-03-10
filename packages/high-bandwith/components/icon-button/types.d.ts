import { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'primary' | 'secondary';
  cut?: 'right-bottom' | 'right-top' | 'left-top' | 'none';
  icon?: ComponentType;
  className?: string;
  iconSize?: number;
  iconStroke?: string;
  disabled?: boolean;
}
