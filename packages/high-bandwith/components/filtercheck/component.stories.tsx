import { Story } from '@storybook/react/types-6-0';
import FilterCheck from './component';
import React from 'react';
import type { IFilterCheck } from './types';

export default {
  title: 'Components/FilterCheck',
  component: FilterCheck,
};

const Template: Story<IFilterCheck> = ({ ...args }) => (
  <div className="w-[300px]">
    <FilterCheck {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Sentinal-2',
  bullet: 'yellow',
  checkboxProps: {
    onChange: (event) => {
      console.info(event.target.checked);
    },
  },
};

export const Examples1: React.FC = () => (
  <div className="w-[300px]">
    <FilterCheck
      label="Sentinal-2"
      bullet="yellow"
      checkboxProps={{
        onChange: (event) => {
          console.info(event);
        },
      }}
    />

    <FilterCheck
      label="Radarsat-2"
      bullet="purple"
      checkboxProps={{
        onChange: (event) => {
          console.info(event);
        },
      }}
    />

    <FilterCheck
      label="Cosmo SkyMed"
      bullet="green"
      checkboxProps={{
        checked: true,
        onChange: (event) => {
          console.info(event);
        },
      }}
    />
  </div>
);
