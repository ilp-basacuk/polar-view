import { FC } from 'react';

import cx from 'classnames';

import Styles from 'components/forms/select/constants/styles';
import { SelectMenuProps } from 'components/forms/select/types';

export const SelectMenu: FC<SelectMenuProps> = ({
  opened,
  attributes,
  children,
}: SelectMenuProps) => (
  <div
    className={cx({
      'overflow-hidden': true,
      'invisible pointer-events-none': attributes?.popper?.['data-popper-reference-hidden'],
      [Styles.open]: opened,
    })}
  >
    {children}
  </div>
);

export default SelectMenu;
