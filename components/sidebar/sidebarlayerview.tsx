import Expandable from 'components/expandable';
import React from 'react';
import { IceCharts } from './icecharts';
import { SARImagery } from './sarimagery';
import { SeaIce } from './seaiceconcentration';
import { SideBarAction, SideBarActionKind } from './sidebar.types';

interface SideBarLayerViewProps {
  onChange: (params: SideBarAction) => void;
}

enum EXPANDABLES {
  SARIMAGERY = 'SARIMAGERY',
  SEAICE = 'SEAICE',
  ICECHARTS = 'ICECHARTS',
}

const SidebarLayerView: React.FC<SideBarLayerViewProps> = ({ onChange }) => {
  const [expanded, setExpanded] = React.useState<EXPANDABLES>(EXPANDABLES.SARIMAGERY);

  return (
    <div className="space-y-1">
      <Expandable
        label="SAR IMAGERY"
        onExpandChange={() => setExpanded(EXPANDABLES.SARIMAGERY)}
        expanded={expanded === EXPANDABLES.SARIMAGERY}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.SARIMAGERY }}
        content={
          <SARImagery
            onChange={(payload) => onChange({ type: SideBarActionKind.SARIMAGERY, payload })}
          />
        }
        first
      />
      <Expandable
        label="SEA ICE CONCENTRATION"
        onExpandChange={() => setExpanded(EXPANDABLES.SEAICE)}
        expanded={expanded === EXPANDABLES.SEAICE}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.SEAICE }}
        content={
          <SeaIce onChange={(payload) => onChange({ type: SideBarActionKind.SEAICE, payload })} />
        }
      />
      <Expandable
        label="ICE CHARTS"
        onExpandChange={() => setExpanded(EXPANDABLES.ICECHARTS)}
        expanded={expanded === EXPANDABLES.ICECHARTS}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.ICECHARTS }}
        content={
          <IceCharts
            onChange={(payload) => onChange({ type: SideBarActionKind.ICECHARTS, payload })}
          />
        }
      />
    </div>
  );
};

export default SidebarLayerView;
