import { Story } from '@storybook/react/types-6-0';
import DoubleRightArrow from 'components/icons/double-right-arrow';

import Button from './component';
import { IconButtonProps } from './types';

export default {
  title: 'Components/Icon Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
};

const Template: Story<IconButtonProps> = ({ ...args }: IconButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: DoubleRightArrow,
  disabled: false,
};
