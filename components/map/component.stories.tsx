import { Story } from '@storybook/react/types-6-0';

import Map from './map-component';
import { MapProps } from './types';

export default {
  title: 'Components/Map',
  component: Map,
  argTypes: {
    projection: {
      control: {
        type: 'select',
        options: ['artic', 'antarctic'],
      },
    },
  },
};

const Template: Story<MapProps> = ({ ...args }: MapProps) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  projection: 'artic',
};

export const Antarctic = Template.bind({});
Antarctic.args = {
  projection: 'antarctic',
};
