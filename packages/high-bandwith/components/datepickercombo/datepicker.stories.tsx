import { Story } from '@storybook/react/types-6-0';
import DatePickerCombo, { IReactDatePickerComboProps } from './component';

export default {
  title: 'Components/DatePickerCombo',
  component: DatePickerCombo,
};

const Template: Story<IReactDatePickerComboProps> = ({ ...args }: IReactDatePickerComboProps) => <DatePickerCombo {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholderText: 'Select Date',
};
