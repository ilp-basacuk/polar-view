import cx from 'classnames';
import { CheckboxProps } from 'components/forms/checkbox/component';
import React from 'react';
import type { Color } from 'types';

export interface LegendItemProps extends CheckboxProps {
  label: string;
  color?: Color;
  image?: string;
}

const COLOR_MAP = {
  red: 'bg-red',
  orange: 'bg-orange',
  yellow: 'bg-yellow',
  sky: 'bg-sky',
  gray: 'bg-gray',
  none: 'bg-none',
  purple: 'bg-purple',
  green: 'bg-green',
};

const LegendItem: React.FC<LegendItemProps> = ({ label, color, image }) => {
  const bulletClass = cx({
    'w-2.5 h-2.5 rounded mr-2.5': true,
    [`bg-${COLOR_MAP[color] || 'none'}`]: !!color,
  });
  return (
    <div className="flex items-center p-1">
      <div className="flex items-center">
        {image && (
          <div
            className={cx(bulletClass, 'bg-cover')}
            style={{ backgroundImage: `url('/images/legend/${image}')` }}
          />
        )}
        {color && (
          <div className={bulletClass} style={!COLOR_MAP[color] && { backgroundColor: color }} />
        )}
      </div>
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

export default LegendItem;
