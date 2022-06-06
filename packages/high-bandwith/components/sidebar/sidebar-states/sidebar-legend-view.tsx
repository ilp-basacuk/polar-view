import { FC } from 'react';
import type { SideBarAction } from '../types';
import { useAppSelector } from 'store/hooks';
import Legend from 'components/legend';
import { GroupedLayer, Layer } from 'types';

interface DividerProps {
  label?: string;
}
const Divider: FC<DividerProps> = ({ label }) => (
  <div className="flex items-center mb-2">
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
  const activeLayers = layerGroups.map(layerGroup => {
    const layerGroupActiveLayers = layerGroup.layers.map(layer => {
      if (!layer.checked) return null;
      if (isGroupedLayer(layer)) return layer.layers.find(groupedLayer => groupedLayer.checked) || null;
      return layer;
    }).filter(Boolean);
    return layerGroupActiveLayers.length ? { [layerGroup.id]: layerGroupActiveLayers } : null;
  }).filter(Boolean);

  console.log(activeLayers)
  const renderLayerLegend = (layerGroup) => {
    return (
      Object.keys(layerGroup).map((layerGroupId: string) => (
        <div key={`legend-group-${layerGroupId}`}>
          <Divider label={layerGroupId} />
          {layerGroup[layerGroupId].map((layer: Layer) => (
            <div key={`legend-item-${layerGroupId}`}>
              <Legend layer={layer} />
            </div>
           ))}
        </div>
      )))
  };

  return (
    <div className="space-y-1 max-h-96 overflow-y-auto border border-b-0 border-mainblue p-3">
      {activeLayers.map(renderLayerLegend)}
    </div>
  );
}

export default SidebarLegendView;
