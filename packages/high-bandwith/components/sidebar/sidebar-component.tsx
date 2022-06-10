import { FC, useState } from 'react';
import Iconbutton from 'components/icon-button';
import DoubleRightArrow from 'components/icons/double-right-arrow';
import cx from 'classnames';
import type { SideBarProps } from './types';
import { SIDEBAR_VIEW } from './types.d';
import SidebarBottomAction from './sidebar-bottom-action';
import SidebarEditView from './sidebar-states/sidebar-edit-view';
import SidebarLegendView from './sidebar-states/sidebar-legend-view';

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [view, setView] = useState<SIDEBAR_VIEW>(SIDEBAR_VIEW.EDIT);

  return (
    <div className={cx('bg-navyblue w-72 absolute left-6 bottom-12', className)}>
      {view === SIDEBAR_VIEW.EDIT && <SidebarEditView />}
      {view === SIDEBAR_VIEW.LEGEND && <SidebarLegendView />}
      {view === SIDEBAR_VIEW.MINIMIZED ? (
        <Iconbutton
          onClick={() => {
            setView(SIDEBAR_VIEW.EDIT);
          }}
          theme="secondary"
          icon={DoubleRightArrow}
          iconStroke="#fff"
        />
      ) : (
        <SidebarBottomAction view={view} setView={setView} />
      )}
    </div>
  );
};

export default SideBar;
