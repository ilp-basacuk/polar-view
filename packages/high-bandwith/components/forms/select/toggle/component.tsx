import { FC, useCallback, useMemo } from 'react';

import cx from 'classnames';

import Styles from 'components/forms/select/constants/styles';
import { SelectToggleProps } from 'components/forms/select/types';
import Icon from 'components/icon';

import ARROW_DOWN_SVG from 'svgs/ui/arrow-down.svg?sprite';

export const SelectToggle: FC<SelectToggleProps> = ({
  options,
  prefix,
  disabled,
  multiple,
  opened,
  selectedItems,
  placeholder,
  className,
  getToggleButtonProps,
  getDropdownProps,
}: SelectToggleProps) => {
  const getEnabledOptions = useMemo(() => {
    const opts = options.filter((o) => !o.disabled && o.enabled);
    return opts;
  }, [options]);

  const labelDefaultFormatter: () => string = useCallback(() => {
    if (!selectedItems.length) return placeholder;
    if (selectedItems.length === 1) return selectedItems[0].label;
    if (selectedItems.length === getEnabledOptions.length) return 'All items selected';
    return `${selectedItems.length} items selected`;
  }, [selectedItems, placeholder, getEnabledOptions]);

  return (
    <button
      type="button"
      aria-label="Select..."
      disabled={disabled}
      className={cx({
        [className]: !!className,
        'relative w-full flex items-center tracking-wide text-tiny font-bolder uppercase px-2 py-1':
          true,
        'border-b border-mainblue': opened,
        'border border-mainblue': !opened,
      })}
      {...(!multiple && getToggleButtonProps())}
      {...(multiple && getToggleButtonProps(getDropdownProps({ preventKeyAction: opened })))}
    >
      {prefix && (
        <span
          className={cx({
            'mr-2 text-xs font-heading': true,
            [Styles.prefix.base]: true,
          })}
        >
          {prefix}
        </span>
      )}

      <span
        className={cx({
          'text-sm leading-none': true,
          [Styles.prefix.base]: selectedItems.length,
        })}
      >
        {labelDefaultFormatter()}
      </span>

      <Icon
        className={cx({
          'absolute w-3 h-3 right-4': true,
          [Styles.icon.closed]: !opened,
          [Styles.icon.open]: opened,
          [Styles.icon.disabled]: disabled,
        })}
        icon={ARROW_DOWN_SVG}
      />
    </button>
  );
};

export default SelectToggle;
