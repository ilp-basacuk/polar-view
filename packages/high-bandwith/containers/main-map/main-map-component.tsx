/* eslint-disable no-restricted-properties */
import { FC, useMemo, useCallback } from 'react';
import Layer from 'components/layer';

import Map from 'components/map';

import LAYERS from 'constants/layers.json';
import { MainMapProps } from './types';
import { useAppSelector } from 'store/hooks';

const DEFAULT_LAYER_IDS : string[] = ['graticule', 'land-mask'];

const renderLayers = (layerIds: string[]) => layerIds.map(renderLayer);
const renderLayer = (layerId) => {
  const layer = LAYERS.find(layer => layer.id === layerId);
  if (!layer) return null;
  return <Layer key={layer.id} {...layer} />;
};

const MainMap: FC<MainMapProps> = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data);

  const activeLayerIds : string[] = useMemo(() =>
    layerGroups.map(layerGroup => layerGroup.layers.map(l => l.checked && l.id).filter(Boolean)).flat(),
    [layerGroups]
  );

  const renderMapLayers = useCallback(() => renderLayers([
    ...DEFAULT_LAYER_IDS,
    ...activeLayerIds
  ]), [activeLayerIds]);

  return <Map projection="antarctic">{renderMapLayers()}</Map>;
};

export default MainMap;
