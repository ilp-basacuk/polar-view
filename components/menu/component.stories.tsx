import { Story } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from './component';
import { MenuButton } from './menubutton';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
};

const Template: Story<MenuProps> = (args: MenuProps) => (
  <div className="flex h-full justify-center items-center">
    <Menu {...args}>
      <MenuButton />
    </Menu>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  items: [
    { text: 'DOWNLOAD', value: 'download' },
    { text: 'COLOR SETTINGS', value: 'color' },
  ],
};
