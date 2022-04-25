import { Story } from '@storybook/react/types-6-0';
import DaySlider from './component';
import format from 'date-fns/format';
import React from 'react';

export default {
  title: 'Components/DaySlider',
  component: DaySlider,
};

const Template: Story<any> = ({ ...args }: any) => {
  const [value, setValue] = React.useState();
  return (
    <div className="w-[270px]">
      <DaySlider {...args} onChange={setValue} />
      {value && <div className="text-mainblue mt-8">Selected Value: {format(value, 'dd MMM')}</div>}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
};
