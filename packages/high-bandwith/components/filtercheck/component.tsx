import { FC } from 'react';
import cx from 'classnames';
import kebabCase from 'lodash/kebabCase';
import Checkbox from 'components/forms/checkbox/component';
import DownloadIcon from 'components/icons/download';

import type { IFilterCheck } from './types';

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

const FilterCheck: FC<IFilterCheck> = ({
  label,
  bullet,
  checkboxProps,
  downloadURL,
  labelColor = 'white',
}) => {
  const bulletClass = cx({
    'w-2.5 h-2.5 rounded mr-2.5': true,
    [COLOR_MAP[bullet || 'none']]: !!bullet,
  });
  return (
    <div className="flex items-center justify-between p-1">
      <div className="flex items-center">
        {bullet && <div className={bulletClass} />}
        <div className={`text-sm text-${labelColor}`}>{label}</div>
      </div>
      {(downloadURL || checkboxProps) && (
        <div className="flex items-end">
          {downloadURL && (
            <button
              className="mr-1 text-mainblue hover:text-white"
              onClick={() => window.open(downloadURL, '_blank')}
            >
              <DownloadIcon />
            </button>
          )}
          {checkboxProps && (
            <div className="flex">
              {checkboxProps && (
                <div className="ml-1">
                  <Checkbox {...checkboxProps} id={`check-${kebabCase(label)}`} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterCheck;
