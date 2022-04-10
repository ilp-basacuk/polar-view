import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { LinkProps } from 'next/link';

export interface IconButtonProps extends React.ReactHTMLElement {
  theme: 'primary' | 'secondary';
  className?: string;
  cut?: 'right-bottom' | 'right-top' | 'left-top' | 'none'
  icon?: any
  disabled?: boolean
}
