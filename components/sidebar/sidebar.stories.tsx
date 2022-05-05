import { Story } from '@storybook/react/types-6-0';
import { SideBar } from './sidebarcontainer';
import React from 'react';

export default {
  title: 'Components/Sidebar',
  component: SideBar,
};

export const Examples: React.FC = () => (
  <div className="h-[800px] w-full relative">
    <SideBar />
  </div>
);
