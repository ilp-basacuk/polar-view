import { FC, useState } from 'react';
import Expandable from 'components/expandable';
import { IceCharts } from './icecharts';
import { SARImagery } from './sar-imagery';
import { SeaIce } from './sea-ice-concentration';
import type { SideBarAction } from './types';
import { SideBarActionKind } from './types.d';

interface SideBarLayerViewProps {
  onChange: (params: SideBarAction) => void;
}

enum EXPANDABLES {
  SAR_IMAGERY = 'SAR_IMAGERY',
  SEA_ICE = 'SEA_ICE',
  ICE_CHARTS = 'ICE_CHARTS',
}

const SidebarLayerView: FC<SideBarLayerViewProps> = ({ onChange }) => {
  const [expanded, setExpanded] = useState<EXPANDABLES>(EXPANDABLES.ICE_CHARTS);

  return (
    <div className="space-y-1">
      <Expandable
        label="SAR IMAGERY"
        onExpandChange={() => setExpanded(EXPANDABLES.SAR_IMAGERY)}
        expanded={expanded === EXPANDABLES.SAR_IMAGERY}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.SAR_IMAGERY }}
        content={
          <SARImagery
            onChange={(payload) => onChange({ type: SideBarActionKind.SAR_IMAGERY, payload })}
          />
        }
        first
      />
      <Expandable
        label="SEA ICE CONCENTRATION"
        onExpandChange={() => setExpanded(EXPANDABLES.SEA_ICE)}
        expanded={expanded === EXPANDABLES.SEA_ICE}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.SEA_ICE }}
        content={
          <SeaIce onChange={(payload) => onChange({ type: SideBarActionKind.SEA_ICE, payload })} />
        }
      />
      <Expandable
        label="ICE CHARTS"
        onExpandChange={() => setExpanded(EXPANDABLES.ICE_CHARTS)}
        expanded={expanded === EXPANDABLES.ICE_CHARTS}
        radioButtonProps={{ name: 'EXPANDABLES', value: EXPANDABLES.ICE_CHARTS }}
        content={
          <IceCharts
            onChange={(payload) => onChange({ type: SideBarActionKind.ICE_CHARTS, payload })}
          />
        }
      />
    </div>
  );
};

export default SidebarLayerView;
