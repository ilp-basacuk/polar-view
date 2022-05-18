import Button from 'components/button';
import DoubleLeftArrow from 'components/icons/double-left-arrow';
import { FC } from 'react';
import { SIDEBAR_VIEW } from './types.d';

interface SideBarActionProps {
  view: SIDEBAR_VIEW;
  setView: (value: SIDEBAR_VIEW) => void;
}

const SidebarBottomAction: FC<SideBarActionProps> = ({ view, setView }) => (
  <div className="border-l border-t border-mainblue text-tiny text-seabed font-bolder flex items-center cursor-pointer">
    <div
      className="w-8 h-7 flex items-center justify-center border-b border-mainblue"
      role="button"
      tabIndex={-1}
      onClick={() => {
        setView(SIDEBAR_VIEW.MINIMIZED);
      }}
    >
      <DoubleLeftArrow />
    </div>
    <Button
      theme="primary"
      onClick={() => {
        setView(view === SIDEBAR_VIEW.LAYERS ? SIDEBAR_VIEW.LEGEND : SIDEBAR_VIEW.LAYERS);
      }}
      className="w-full bg-mainblue flex items-center pl-4 h-7 text-seabed hover:border hover:border-t-0 hover:border-mainblue"
    >
      {view === SIDEBAR_VIEW.LAYERS ? 'SHOW AS A LEGEND' : 'EDIT LAYERS'}
    </Button>
  </div>
);

export default SidebarBottomAction;
