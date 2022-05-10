import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import THEME from './constants';
import type { ButtonProps, AnchorProps, Overload } from './types';

const CUT_MAP = {
  'right-bottom': 'cut cut-r-b',
  'right-top': 'cut cut-r-t',
  'left-top': 'cut cut-l-t',
  none: '',
};

const SIZE_MAP = {
  small: 'h-4',
  medium: 'h-6',
  large: 'h-8',
};

// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

function buildClassName({ className, disabled, theme, cut, size }) {
  return cx('btn flex items-center justify-center text-tiny font-bolder p-2 uppercase', {
    [THEME[theme]]: true,
    [CUT_MAP[cut]]: true,
    [SIZE_MAP[size]]: true,
    [className]: !!className,
    'opacity-50 pointer-events-none': disabled,
  });
}

export const LinkAnchor: FC<AnchorProps> = ({
  anchorLinkProps,
  children,
  theme = 'primary',
  className,
  disabled,
  href,
  cut = 'right-bottom',
  size = 'large',
  ...restProps
}: AnchorProps) => (
  <Link href={href} {...anchorLinkProps}>
    <span className={`btn-wrapper cursor-pointer ${CUT_MAP[cut]}`}>
      <a
        className={buildClassName({
          className,
          disabled,
          theme,
          cut,
          size,
        })}
        {...restProps}
      >
        {children}
      </a>
    </span>
  </Link>
);

export const Anchor: FC<AnchorProps> = ({
  children,
  theme = 'primary',
  className,
  disabled,
  href,
  cut = 'right-bottom',
  size = 'large',
  ...restProps
}: AnchorProps) => {
  // Anchor element doesn't support disabled attribute
  // https://www.w3.org/TR/2014/REC-html5-20141028/disabled-elements.html
  if (disabled) {
    return <span {...restProps}>{children}</span>;
  }
  return (
    <span className={`btn-wrapper cursor-pointer ${CUT_MAP[cut]}`}>
      <a
        href={href}
        className={buildClassName({
          className,
          disabled,
          theme,
          cut,
          size,
        })}
        {...restProps}
      >
        {children}
      </a>
    </span>
  );
};

export const Button: FC<ButtonProps> = ({
  children,
  theme = 'primary',
  className,
  disabled,
  cut = 'right-bottom',
  size = 'large',
  component = 'button',
  ...restProps
}: ButtonProps) => {
  const Component = component;
  return (
    <span className={`btn-wrapper ${CUT_MAP[cut]}`}>
      <Component
        className={buildClassName({
          className,
          disabled,
          theme,
          cut,
          size,
        })}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </Component>
    </span>
  );
};

export const LinkButton: Overload = (props: ButtonProps | AnchorProps) => {
  // We consider a link button when href attribute exits
  if (hasHref(props)) {
    const { href } = props;
    if (href.startsWith('http')) {
      return <Anchor {...props} />;
    }
    return <LinkAnchor {...props} />;
  }
  return <Button {...props} />;
};

export default LinkButton;
