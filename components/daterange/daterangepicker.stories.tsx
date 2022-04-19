import { Story } from '@storybook/react/types-6-0';
import DateRangePicker from './component';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

const Template: Story<any> = ({ ...args }: any) => <DateRangePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  startPlaceHolder: 'Start Date',
  endPlaceHolder: 'End Date',
};
