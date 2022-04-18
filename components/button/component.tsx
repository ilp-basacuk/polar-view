import cx from 'classnames';
import { FC } from 'react';
import THEME from './constants';
import type { ButtonProps } from './types';

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

function buildClassName({ className, disabled, theme, cut, size }) {
  return cx({
    'btn flex items-center justify-center text-tiny font-bolder p-2': true,
    [THEME[theme]]: true,
    [CUT_MAP[cut]]: true,
    [SIZE_MAP[size]]: true,
    [className]: !!className,
    'opacity-50 pointer-events-none': disabled,
  });
}

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

export default Button;
