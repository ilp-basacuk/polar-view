import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import type { LinkProps } from 'next/link';

export interface AnchorButtonProps {
  theme: 'primary' | 'secondary' | 'info';
  className?: string;
  containerClassName?: string;
  cut?: 'right-bottom' | 'right-top' | 'left-top' | 'none';
  size?: 'small' | 'medium' | 'large';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
}

// Button props
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorButtonProps & {
    href?: string;
  };

// Anchor props
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  AnchorButtonProps & {
    href?: string;
    disabled?: boolean;
    anchorLinkProps?: LinkProps;
  };

// Input/output options
export type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};
