import React from 'react';
import DatePicker from '../datepicker';
import addDays from 'date-fns/addDays';
import useChangeEffect from 'components/hooks/useChangeState';

interface IDateRangePicker {
  startDate?: Date;
  endDate?: Date;
  startPlaceHolder?: string;
  endPlaceHolder?: string;
  onChange?: (startDate?: Date, endDate?: Date) => void;
}

const DateRangePicker: React.FC<IDateRangePicker> = ({
  startDate,
  endDate,
  startPlaceHolder,
  endPlaceHolder,
  onChange,
}) => {
  const [sStartDate, setStartDate] = React.useState(startDate);
  const [sEndDate, setEndDate] = React.useState(endDate);

  useChangeEffect(() => {
    onChange(sStartDate, sEndDate);
  }, [sStartDate, sEndDate]);

  return (
    <div className="flex items-center justify-between">
      <div>
        <DatePicker
          selected={sStartDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={sStartDate}
          endDate={sEndDate}
          maxDate={sEndDate}
          disableToday={sEndDate < addDays(new Date(), -1)}
          placeholderText={startPlaceHolder}
        />
      </div>
      <span className="text-mainblue text-tiny font-bolder mx-4">TO</span>
      <div>
        <DatePicker
          selected={sEndDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={sStartDate}
          endDate={sEndDate}
          minDate={sStartDate}
          maxDate={new Date()}
          disableToday={sStartDate > new Date()}
          placeholderText={endPlaceHolder}
        />
      </div>
    </div>
  );
};
export default DateRangePicker;
