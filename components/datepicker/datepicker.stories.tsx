import { Story } from '@storybook/react/types-6-0';
import DatePicker from './component';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story<any> = ({ ...args }: any) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};
