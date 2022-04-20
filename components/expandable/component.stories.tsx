import { Story } from '@storybook/react/types-6-0';
import Expandable from './component';
import React from 'react';

export default {
  title: 'Components/Expandable',
  component: Expandable,
};

const Template: Story<any> = ({ ...args }: any) => <Expandable {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'SAR IMAGERY',
  expanded: false,
};

export const Examples: React.FC = () => {
  const [expanded, setExpanded] = React.useState(1);
  return (
    <div>
      <Expandable
        label="SEA ICE CONCENTRATION"
        onExpandChange={() => setExpanded(0)}
        expanded={expanded === 0}
        radioButtonProps={{ name: 'combo', value: '1' }}
        content={<div className="h-40"></div>}
      ></Expandable>
      <Expandable
        label="ICE CHARTS"
        onExpandChange={() => setExpanded(1)}
        expanded={expanded === 1}
        radioButtonProps={{ name: 'combo', value: '2' }}
        content={<div className="h-40"></div>}
      ></Expandable>
      <Expandable
        label="MODIS MOSAIC"
        onExpandChange={() => setExpanded(2)}
        expanded={expanded === 2}
        radioButtonProps={{ name: 'combo', value: '3' }}
        content={<div className="h-40"></div>}
      ></Expandable>
    </div>
  );
};
