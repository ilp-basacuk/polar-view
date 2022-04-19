import React from 'react';
import DatePicker from '../datepicker';

interface IDateRangePicker {
  startDate?: Date;
  endDate?: Date;
  startPlaceHolder?: string;
  endPlaceHolder?: string;
}

const DateRangePicker: React.FC<IDateRangePicker> = ({ startDate, endDate, startPlaceHolder, endPlaceHolder }) => {
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
        placeholderText={endPlaceHolder}
      />
    </div>
  );
};
export default DateRangePicker;
