import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import DateRangePicker, { IDateRangePicker } from './component';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

const Template: Story<IDateRangePicker> = ({ ...args }: IDateRangePicker) => {
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  return (
    <div className="w-[300px]">
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        {...args}
        onChange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  startPlaceHolder: 'Start Date',
  endPlaceHolder: 'End Date',
};
