import { Story } from '@storybook/react/types-6-0';

import RadioButton from './component';
import type { RadioButtonProps } from './types';

export default {
  title: 'Components/Forms/Radio',
  component: RadioButton,
};

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'radio1',
  labelText: 'Label Text',
};
