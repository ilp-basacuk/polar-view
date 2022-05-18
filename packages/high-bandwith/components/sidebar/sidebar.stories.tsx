import React from 'react';
import SideBar from './';

export default {
  title: 'Components/Sidebar',
  component: SideBar,
};

export const Examples: React.FC = () => (
  <div className="w-full relative">
    <SideBar />
  </div>
);
