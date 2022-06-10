import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import DaySlider, { IDaySliderProps } from './component';
import format from 'date-fns/format';

export default {
  title: 'Components/DaySlider',
  component: DaySlider,
};

const Template: Story<IDaySliderProps> = ({ ...args }: IDaySliderProps) => {
  const [value, setValue] = useState<Date | undefined>();
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
