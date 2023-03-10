import { Story } from '@storybook/react/types-6-0';
import Button from './component';
import { ButtonProps } from './types';

const ButtonComponent = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'info'],
      },
    },
  },
};

export default ButtonComponent;

const Template: Story<ButtonProps> = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'TEXT',
  disabled: false,
};
