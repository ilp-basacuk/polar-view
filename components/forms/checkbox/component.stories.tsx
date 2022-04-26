import { Story } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from './component';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox label',
};
