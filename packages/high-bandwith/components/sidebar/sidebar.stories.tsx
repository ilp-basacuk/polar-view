import React from 'react';
import SideBar from './';
import { Provider } from 'react-redux';
import layerGroupReducer from 'store/features/layerGroups/slice';
import { configureStore } from '@reduxjs/toolkit';

// A copy of the redux store
const Mockstore = ({ children }) => (
  <Provider
    store={configureStore({
      reducer: { layerGroups: layerGroupReducer },
    })}
  >
    {children}
  </Provider>
);

const SidebarStory = {
  title: 'Components/Sidebar',
  component: SideBar,
};

export default SidebarStory;

const Template = () => <SideBar />;

export const Default = Template.bind({});
Default.decorators = [(story) => <Mockstore>{story()}</Mockstore>];
