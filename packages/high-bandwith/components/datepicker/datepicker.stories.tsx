import { Story } from '@storybook/react/types-6-0';
import DatePicker, { IReactDatePickerProps } from './component';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story<IReactDatePickerProps> = ({ ...args }: IReactDatePickerProps) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholderText: 'Select Date',
};
