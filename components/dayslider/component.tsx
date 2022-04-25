import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import React from 'react';

interface IDaySlider {
  startDate?: Date;
  onChange?: (date: Date) => void;
}

const Days = Array.from({ length: 30 }, (x, i) => i);

const DaySlider: React.FC<IDaySlider> = ({ startDate, onChange }) => {
  const onDayChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(addDays(startDate, Number(event.target.value)));
      }
    },
    [onChange]
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        {Days.map((val) => (
          <div className="relative border border-mainblue bg-softerblue flex-1 cursor-pointer">
            <input
              id="dayslider"
              type="radio"
              name="dayslider"
              className="dayslider-radio opacity-0 absolute h-3 w-full cursor-pointer"
              value={val}
              onChange={onDayChange}
            />
            <div className="h-3 w-full cursor-pointer" />
          </div>
        ))}
      </div>

      <div className="flex text-mainblue text-tiny mt-2 justify-between">
        <div>{format(startDate, 'dd MMM')}</div>
        <div>{format(addDays(startDate, 7), 'dd MMM')}</div>
        <div>{format(addDays(startDate, 15), 'dd MMM')}</div>
        <div>{format(addDays(startDate, 22), 'dd MMM')}</div>
        <div>{format(addDays(startDate, 29), 'dd MMM')}</div>
      </div>
    </div>
  );
};

export default DaySlider;
