import React from 'react';
import SideBar from './sidebarcontainer';

export default {
  title: 'Components/Sidebar',
  component: SideBar,
};

export const Examples: React.FC = () => (
  <div className="h-[800px] w-full relative">
    <SideBar />
  </div>
);
