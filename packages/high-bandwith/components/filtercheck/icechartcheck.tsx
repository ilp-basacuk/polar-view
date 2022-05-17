import cx from 'classnames';
import { CheckboxProps } from 'components/forms/checkbox/component';
import React from 'react';

export interface IIceChartBulletProps extends CheckboxProps {
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

const IceChartCheckBullet: React.FC<IIceChartBulletProps> = ({ label, bullet, name, ...others }) => {
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
            <div className="text-sm text-white peer-checked:text-mainblue">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceChartCheckBullet;
