import { FC, useState } from 'react';
import Iconbutton from 'components/iconbutton';
import DoubleRightArrow from 'components/icons/double-right-arrow';
import cx from 'classnames';
import type { SideBarProps } from './types';
import { SIDEBAR_VIEW } from './types.d';
import {
  // useAppSelector,
  useAppDispatch
} from 'store/hooks';
import { setLayerGroupsData } from 'store/features/layerGroups/slice';
import SidebarBottomAction from './sidebar-bottom-action';
import SidebarLayerView from './sidebar-layer-view';
import SidebarLegendView from './sidebar-legend-view';

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [view, setView] = useState<SIDEBAR_VIEW>(SIDEBAR_VIEW.LAYERS);
  // const layerGroups = useAppSelector(state => state.layerGroups)
  const dispatch = useAppDispatch();

  const updateLayerGroups = (layerGroups) => {
    dispatch(setLayerGroupsData(layerGroups));
  }

  return (
    <div className={cx("bg-navyblue w-[275px] absolute left-6 bottom-12", className)}>
      {view === SIDEBAR_VIEW.LAYERS && <SidebarLayerView onChange={updateLayerGroups} />}
      {view === SIDEBAR_VIEW.LEGEND && <SidebarLegendView />}
      {view === SIDEBAR_VIEW.MINIMIZED ? (
          <Iconbutton
            onClick={() => {
              setView(SIDEBAR_VIEW.LAYERS);
            }}
            theme="secondary"
            icon={DoubleRightArrow}
            iconStroke="#fff"
          />
        ) : <SidebarBottomAction view={view} setView={setView} />
      }
    </div>
  );
};

export default SideBar;
