import Button from 'components/button';
import IconButton from 'components/iconbutton';
import ChevronDown from 'components/icons/chevron-down';
import ChevronLeft from 'components/icons/chevron-left';
import ChevronRight from 'components/icons/chevron-right';
import ChevronUp from 'components/icons/chevron-up';
import format from 'date-fns/format';
import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

interface IDatePickerInputProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startDate: Date;
  isCalendarOpen: boolean;
  placeHolderText?: string;
}

interface IReactDatePickerProps extends ReactDatePickerProps {
  disableToday?: boolean;
}

type Ref = HTMLButtonElement;

const DatePickerInput = React.forwardRef<Ref, IDatePickerInputProps>(
  ({ onClick, startDate, isCalendarOpen, placeHolderText }, ref) => {
    const formatedDate = startDate ? format(startDate, 'dd/MM/yyyy') : placeHolderText;
    return (
      <button
        type="button"
        className="border border-mainblue text-white text-xs py-1 px-2 active:bg-softerblue flex content-center"
        onClick={onClick}
        ref={ref}
      >
        {formatedDate}
        <span className="ml-4 h-4 flex items-center">
          {isCalendarOpen && <ChevronUp stroke="white" size={10} />}
          {!isCalendarOpen && <ChevronDown stroke="white" size={10} />}
        </span>
      </button>
    );
  }
);

const DatePicker: React.FC<IReactDatePickerProps> = ({
  startDate,
  onChange,
  placeholderText,
  disableToday,
  ...others
}: IReactDatePickerProps) => {
  const [currentDate, setCurrentDate] = React.useState(startDate);
  const [isCalendarOpen, setisCalendarOpen] = React.useState(false);
  return (
    <ReactDatePicker
      startDate={currentDate}
      onChange={(date, event) => {
        setCurrentDate(date);
        onChange(date, event);
      }}
      onCalendarOpen={() => setisCalendarOpen(true)}
      onCalendarClose={() => setisCalendarOpen(false)}
      className="text-white"
      calendarClassName="text-white border border-mainblue p-2 w-52 relative cut-r-b bg-navyblue"
      customInput={
        <DatePickerInput
          startDate={currentDate}
          isCalendarOpen={isCalendarOpen}
          placeHolderText={placeholderText}
        />
      }
      todayButton={
        <Button
          theme="primary"
          cut="none"
          size="small"
          className="mx-auto my-2"
          disabled={disableToday}
          onClick={() => setCurrentDate(new Date())}
        >
          TODAY
        </Button>
      }
      renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
        <div className="flex justify-between space-x-3 mb-2">
          <IconButton
            icon={ChevronLeft}
            iconSize={9}
            theme="primary"
            cut="none"
            onClick={decreaseMonth}
          />
          <div className="flex space-x-1">
            <Button theme="primary" cut="none" size="medium">
              {format(monthDate, 'MMM').toUpperCase()}
            </Button>
            <Button theme="primary" cut="none" size="medium">
              {monthDate.getFullYear()}
            </Button>
          </div>
          <IconButton
            icon={ChevronRight}
            iconSize={9}
            theme="primary"
            cut="none"
            onClick={increaseMonth}
          />
        </div>
      )}
      weekDayClassName={() =>
        'h-6 w-6 text-xs flex justify-center items-center text-mainblue font-bold'
      }
      monthClassName={() => 'flex flex-col'}
      dayClassName={() =>
        'h-6 w-6 text-xs flex justify-center items-center font-bold hover:text-white hover:bg-mainblue cursor-pointer'
      }
      {...others}
    />
  );
};

export default DatePicker;