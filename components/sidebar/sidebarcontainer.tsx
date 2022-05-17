import useChangeEffect from 'components/hooks/useChangeState';
import Iconbutton from 'components/iconbutton';
import DoubleRightArrow from 'components/icons/double-right-arrow';
import React from 'react';
import { IceChartsInitialState } from './icecharts';
import { SARImageryInitialState } from './sarimagery';
import { SeaIceInitialState } from './seaiceconcentration';
import { ISidebarState, SideBarAction, SIDEBARVIEW } from './sidebar.types';
import SidebarBottomAction from './sidebarbottomaction';
import SidebarLayerView from './sidebarlayerview';
import SidebarLegendView from './sidebarlegendview';

const sidebarStateReducer = (state: ISidebarState, action: SideBarAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const sidebarInitialState: ISidebarState = {
  SARIMAGERY: SARImageryInitialState,
  SEAICE: SeaIceInitialState,
  ICECHARTS: IceChartsInitialState,
};

const SideBar: React.FC = () => {
  const [state, setState] = React.useReducer(sidebarStateReducer, sidebarInitialState);
  const [view, setView] = React.useState<SIDEBARVIEW>(SIDEBARVIEW.LAYERS);

  useChangeEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="bg-navyblue w-[275px] absolute left-6 bottom-12">
      {view === SIDEBARVIEW.LAYERS && <SidebarLayerView onChange={setState} />}
      {view === SIDEBARVIEW.LEGEND && <SidebarLegendView />}
      {view === SIDEBARVIEW.NONE && (
        <Iconbutton
          onClick={() => {
            setView(SIDEBARVIEW.LAYERS);
          }}
          theme="secondary"
          icon={DoubleRightArrow}
          iconStroke="#ffffff"
        />
      )}
      {view !== SIDEBARVIEW.NONE && <SidebarBottomAction view={view} setView={setView} />}
    </div>
  );
};

export default SideBar;
