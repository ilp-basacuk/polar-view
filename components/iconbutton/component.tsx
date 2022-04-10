import cx from 'classnames';
import { FC } from 'react';
import { THEME } from './constants';
import { IconButtonProps } from './types';

const CUT_MAP = {
  'right-bottom': 'cut-r-b',
  'right-top': 'cut-r-t',
  'left-top': 'cut-l-t',
  none: '',
};

function buildClassName({ className, disabled, theme, cut }) {
  return cx({
    'flex items-center justify-center text-xs font-bolder px-2 py-2': true,
    [THEME[theme]]: true,
    [CUT_MAP[cut]]: true,
    [className]: !!className,
    'opacity-50 pointer-events-none': disabled,
  });
}

export const IconButton: FC<IconButtonProps> = ({
  theme = 'primary',
  className,
  disabled,
  cut = 'right-bottom',
  icon: Icon,
  ...restProps
}: IconButtonProps) => (
  <span className={CUT_MAP[cut]}>
    <button
      className={buildClassName({
        className,
        disabled,
        theme,
        cut,
      })}
      disabled={disabled}
      {...restProps}
    >
      <Icon stroke={theme === 'secondary' ? 'white' : undefined} />
    </button>
  </span>
);

export default IconButton;
