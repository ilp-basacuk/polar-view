import { FC, useReducer, useState } from 'react';
import useChangeEffect from 'components/hooks/useChangeState';
import Iconbutton from 'components/iconbutton';
import DoubleRightArrow from 'components/icons/double-right-arrow';
import cx from 'classnames';
import type { ISidebarState, SideBarAction, SideBarProps } from './types';
import { SIDEBAR_VIEW } from './types.d';

import { IceChartsInitialState } from './icecharts';
import { SARImageryInitialState } from './sar-imagery';
import { SeaIceInitialState } from './sea-ice-concentration';
import SidebarBottomAction from './sidebar-bottom-action';
import SidebarLayerView from './sidebar-layer-view';
import SidebarLegendView from './sidebar-legend-view';

const sidebarStateReducer = (state: ISidebarState, action: SideBarAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const sidebarInitialState: ISidebarState = {
  SAR_IMAGERY: SARImageryInitialState,
  SEA_ICE: SeaIceInitialState,
  ICE_CHARTS: IceChartsInitialState,
};

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [state, setState] = useReducer(sidebarStateReducer, sidebarInitialState);
  const [view, setView] = useState<SIDEBAR_VIEW>(SIDEBAR_VIEW.LAYERS);

  useChangeEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={cx("bg-navyblue w-[275px] absolute left-6 bottom-12", className)}>
      {view === SIDEBAR_VIEW.LAYERS && <SidebarLayerView onChange={setState} />}
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
