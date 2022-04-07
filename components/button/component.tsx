import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import { THEME } from './constants';
import type { ButtonProps, AnchorProps, Overload } from './types';

// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

const CUT_MAP = {
  'right-bottom': 'cut-r-b',
  'right-top': 'cut-r-t',
  'left-top': 'cut-l-t',
};

function buildClassName({ className, disabled, theme, cut }) {
  return cx({
    'flex items-center justify-center text-xs font-bolder px-4 py-2': true,
    [THEME[theme]]: true,
    [CUT_MAP[cut]]: true,
    [className]: !!className,
    'opacity-50 pointer-events-none': disabled,
  });
}

export const LinkAnchor: FC<AnchorProps> = ({
  children,
  theme = 'primary',
  className,
  disabled,
  href,
  cut = 'right-bottom',
  anchorLinkProps,
  ...restProps
}: AnchorProps) => (
  <Link href={href} {...anchorLinkProps}>
    <a
      className={buildClassName({
        className,
        disabled,
        theme,
        cut,
      })}
      {...restProps}
    >
      {children}
    </a>
  </Link>
);

export const Anchor: FC<AnchorProps> = ({
  children,
  theme = 'primary',
  className,
  disabled,
  cut = 'right-bottom',
  href,
  ...restProps
}: AnchorProps) => {
  // Anchor element doesn't support disabled attribute
  // https://www.w3.org/TR/2014/REC-html5-20141028/disabled-elements.html
  if (disabled) {
    return <span {...restProps}>{children}</span>;
  }
  return (
    <a
      href={href}
      className={buildClassName({
        className,
        disabled,
        theme,
        cut,
      })}
      {...restProps}
    >
      {children}
    </a>
  );
};

export const Button: FC<ButtonProps> = ({
  children,
  theme = 'primary',
  className,
  disabled,
  cut = 'right-bottom',
  ...restProps
}: ButtonProps) => (
  <span className={CUT_MAP[cut]}>
    <button
      type="button"
      className={buildClassName({
        className,
        disabled,
        theme,
        cut,
      })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  </span>
);

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
