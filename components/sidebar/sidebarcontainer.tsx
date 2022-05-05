import Expandable from 'components/expandable';
import FilterCheck from 'components/filtercheck';
import { useChangeEffect } from 'components/hooks/useChangeState';
import React from 'react';
import { SARImagery, SARImageryInitialState } from './sarimagery';
import { SeaIce, SeaIceInitialState } from './seaiceconcentration';
import { ISARImageryState, ISidebarState, ISeaIceState } from './sidebar.types';

enum SideBarActionKind {
  SARIMAGERY = 'SARIMAGERY',
  SEAICE = 'SEAICE',
}

interface SideBarAction {
  type: SideBarActionKind;
  payload: ISARImageryState | ISeaIceState;
}

const sidebarStateReducer = (state: ISidebarState, action: SideBarAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const sidebarInitialState: ISidebarState = {
  SARIMAGERY: SARImageryInitialState,
  SEAICE: SeaIceInitialState,
};

export const SideBar: React.FC = () => {
  const [expanded, setExpanded] = React.useState(1);
  const [state, setState] = React.useReducer(sidebarStateReducer, sidebarInitialState);

  useChangeEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="bg-navyblue space-y-1 w-[275px] absolute left-6 bottom-12">
      <Expandable
        label="SAR IMAGERY"
        onExpandChange={() => setExpanded(0)}
        expanded={expanded === 0}
        radioButtonProps={{ name: 'combo', value: '1' }}
        content={
          <SARImagery
            onChange={(payload) => setState({ type: SideBarActionKind.SARIMAGERY, payload })}
          />
        }
        first
      />
      <Expandable
        label="ICE CHARTS"
        onExpandChange={() => setExpanded(1)}
        expanded={expanded === 1}
        radioButtonProps={{ name: 'combo', value: '2' }}
        content={
          <SeaIce onChange={(payload) => setState({ type: SideBarActionKind.SEAICE, payload })} />
        }
      />
      <Expandable
        label="MODIS MOSAIC"
        onExpandChange={() => setExpanded(2)}
        expanded={expanded === 2}
        radioButtonProps={{ name: 'combo', value: '3' }}
        content={<div className="h-40" />}
      />
    </div>
  );
};
