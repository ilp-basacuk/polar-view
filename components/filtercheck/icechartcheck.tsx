import Checkbox, { CheckboxProps } from 'components/forms/checkbox/component';
import React from 'react';
import Menu, { MenuProps } from '../menu/component';
import MenuButton from '../menu/menubutton';
import cx from 'classnames';

export interface IIceChartCheck extends CheckboxProps {
  label: string;
  bullet?: 'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'purple' | 'green';
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

const IceChartCheck: React.FC<IIceChartCheck> = ({ label, bullet, name, ...others }) => {
  const bulletClass = cx({
    'w-2.5 h-2.5 rounded mr-2.5': true,
    [COLOR_MAP[bullet || 'none']]: !!bullet,
  });
  return (
    <div className="flex items-center p-1">
      <div className="flex items-center">{bullet && <div className={bulletClass} />}</div>
      <div className="flex">
        <div className="relative">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox opacity-0 absolute w-full h-full cursor-pointer peer"
              name={name}
              {...others}
            />
            <div className="text-sm text-white peer-checked:text-mainblue">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceChartCheck;
