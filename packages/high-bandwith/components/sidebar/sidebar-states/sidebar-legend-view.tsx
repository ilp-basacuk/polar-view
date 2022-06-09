import { FC } from 'react';
import cx from 'classnames';
import type { SideBarAction } from '../types';
import { useAppSelector } from 'store/hooks';
import Legend from 'components/legend';
import Divider from 'components/divider';
import { GroupedLayer, Layer } from 'types';

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

  const renderLayerLegend = (layerGroup) => {
    return (
      Object.keys(layerGroup).map((layerGroupId: string) => (
        <div key={`legend-group-${layerGroupId}`}>
          <Divider label={layerGroupId} />
          {layerGroup[layerGroupId].map((layer: Layer) => (
            <div key={`legend-item-${layerGroupId}`}>
              <div className="text-mainblue">
                <span className={cx(
                  'w-2 h-2 mr-2 ml-1 inline-block rounded-full border',
                  {
                    [`border-transparent bg-${layer.color}`]:  layer.color,
                    [`border-mainblue bg-transparent`]:  !layer.color
                  }
                )}/>
                {layer.label}
              </div>
              <div className="ml-4 my-1">
                <Legend layer={layer} />
              </div>
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
