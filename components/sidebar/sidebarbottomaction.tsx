import Button from 'components/button';
import DoubleLeftArrow from 'components/icons/double-left-arrow';
import React from 'react';
import { SIDEBARVIEW } from './sidebar.types';

interface SideBarActionProps {
  view: SIDEBARVIEW;
  setView: (value: SIDEBARVIEW) => void;
}

const SidebarBottomAction: React.FC<SideBarActionProps> = ({ view, setView }) => (
  <div className="border-l border-t border-mainblue text-tiny text-seabed font-bolder flex items-center cursor-pointer">
    <div
      className="w-8 h-7 flex items-center justify-center border-b border-mainblue"
      role="button"
      tabIndex={-1}
      onClick={() => {
        setView(SIDEBARVIEW.NONE);
      }}
    >
      <DoubleLeftArrow />
    </div>
    <Button
      theme="primary"
      onClick={() => {
        setView(view === SIDEBARVIEW.LAYERS ? SIDEBARVIEW.LEGEND : SIDEBARVIEW.LAYERS);
      }}
      className="w-full bg-mainblue flex items-center pl-4 h-7 text-seabed hover:border hover:border-t-0 hover:border-mainblue"
    >
      {view === SIDEBARVIEW.LAYERS ? 'SHOW AS A LEGEND' : 'EDIT LAYERS'}
    </Button>
  </div>
);

export default SidebarBottomAction;
