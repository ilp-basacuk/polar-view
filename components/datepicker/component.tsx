import IconButton from 'components/iconbutton';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import ChevronLeft from 'components/icons/chevron-left';
import ChevronRight from 'components/icons/chevron-right';
import Button from 'components/button';
import { format } from 'date-fns';

const DatePicker: React.FC<any> = (props: any) => {
  return (
    <ReactDatePicker
      className="text-white"
      calendarClassName="text-white border border-mainblue p-2 w-52"
      inline
      todayButton={
        <Button theme="primary" cut="none" className="mx-auto my-2 font-xs leading-none">
          TODAY
        </Button>
      }
      renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => {
        return (
          <div className="flex justify-between space-x-3 mb-2">
            <IconButton
              icon={ChevronLeft}
              iconSize={9}
              theme="primary"
              cut="none"
              onClick={decreaseMonth}
            />
            <div className="flex space-x-1">
              <Button theme="primary" cut="none" className="font-xs leading-none">
                {format(monthDate, 'MMM').toUpperCase()}
              </Button>
              <Button theme="primary" cut="none" className="font-xs leading-none">
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
        );
      }}
      weekDayClassName={(date) =>
        'h-6 w-6 text-xs flex justify-center items-center text-mainblue font-bold'
      }
      monthClassName={(date) => 'flex flex-col'}
      dayClassName={(date) =>
        'h-6 w-6 text-xs flex justify-center items-center font-bold hover:text-white hover:bg-mainblue cursor-pointer'
      }
      onChange={(date) => {
        console.log(date);
      }}
    />
  );
};

export default DatePicker;
