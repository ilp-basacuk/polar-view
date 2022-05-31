import { FC } from 'react';
import type { SideBarAction } from '../types';
import { useAppSelector } from 'store/hooks';
import Legend from 'components/legend';
import { SingleLayer, GroupedLayer, Layer } from 'types';

interface DividerProps {
  label?: string;
}
const Divider: FC<DividerProps> = ({ label }) => (
  <div className="flex items-center">
    <div className="bg-softerblue h-px flex-1" />
    {label && <div className="text-tiny text-mainblue uppercase font-bolder ml-2">{label}</div>}
  </div>
);

interface SideBarLegendViewProps {
  onChange?: (params: SideBarAction) => void;
}

const isGroupedLayer = (layer: Layer): layer is GroupedLayer => {
  return (layer as GroupedLayer).type === 'grouped-dropdown';
}

const SidebarLegendView: FC<SideBarLegendViewProps> = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data);
  const activeLayers = layerGroups.map(layerGroup => layerGroup.layers.map(layer => {
    if (!layer.checked) return null;
    if (isGroupedLayer(layer)) return layer.layers.find(groupedLayer => groupedLayer.checked) || null;
    return layer;
  }).filter(Boolean)).flat();
  const renderLayerLegend = (layer) => {
    return (
      <div key={`legend-item-${layer.id}`}>
        <Divider label={layer.label} />
        <Legend layer={layer} />
      </div>
    );
  };

  return (
    <div className="space-y-1 max-h-96 overflow-y-auto border border-b-0 border-mainblue p-3">
      {activeLayers.map(renderLayerLegend)}
    </div>
  );
}

export default SidebarLegendView;
