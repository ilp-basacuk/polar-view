import Checkbox, { CheckboxProps } from 'components/forms/checkbox/component';
import React from 'react';
import Menu, { MenuProps } from '../menu/component';
import MenuButton from '../menu/menubutton';
import cx from 'classnames';

export interface IFilterCheck {
  label: string;
  bullet?: 'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'purple' | 'green';
  menuProps?: MenuProps;
  checkboxProps?: CheckboxProps;
}

const COLOR_MAP: any = {
  red: 'bg-red',
  orange: 'bg-orange',
  yellow: 'bg-yellow',
  sky: 'bg-sky',
  gray: 'bg-gray',
  none: 'bg-none',
  purple: 'bg-purple',
  green: 'bg-green',
};

const FilterCheck: React.FC<IFilterCheck> = ({ label, bullet, menuProps, checkboxProps }) => {
  const bulletClass = cx({
    'w-2.5 h-2.5 rounded mr-2.5': true,
    [COLOR_MAP[bullet || 'none']]: !!bullet,
  });
  return (
    <div className="flex items-center justify-between p-1">
      <div className="flex items-center">
        {bullet && <div className={bulletClass} />}
        <div className="text-sm text-white">{label}</div>
      </div>
      {(menuProps || checkboxProps) && (
        <div className="flex">
          {menuProps && (
            <Menu {...menuProps}>
              <MenuButton />
            </Menu>
          )}
          {checkboxProps && (
            <div className="ml-1">
              <Checkbox {...checkboxProps} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterCheck;
