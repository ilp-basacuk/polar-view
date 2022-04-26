import React from 'react';
import DatePicker from '../datepicker';
import addDays from 'date-fns/addDays';

interface IDateRangePicker {
  startDate?: Date;
  endDate?: Date;
  startPlaceHolder?: string;
  endPlaceHolder?: string;
}

const DateRangePicker: React.FC<IDateRangePicker> = ({
  startDate,
  endDate,
  startPlaceHolder,
  endPlaceHolder,
}) => {
  const [sStartDate, setStartDate] = React.useState(startDate);
  const [sEndDate, setEndDate] = React.useState(endDate);

  return (
    <div className="flex items-center">
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
      <span className="text-mainblue text-tiny font-bolder mx-4">TO</span>
      <DatePicker
        selected={sEndDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={sStartDate}
        endDate={sEndDate}
        minDate={sStartDate}
        disableToday={sStartDate > new Date()}
        placeholderText={endPlaceHolder}
      />
    </div>
  );
};
export default DateRangePicker;
