/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';
import Layer from 'components/layer';
import type { LayerProps } from 'components/layer/types';

import Map from 'components/map';

import LAYERS from 'constants/layers.json';
import { MainMapProps } from './types';
import { useAppSelector } from 'store/hooks';

const DEFAULT_LAYER_IDS : string[] = ['graticule', 'land-mask'];
const DEFAULT_LAYERS : LayerProps[] = LAYERS.filter((layer) => DEFAULT_LAYER_IDS.includes(layer.id));

const MainMap: FC<MainMapProps> = () => {
  const renderLayer = (layer) => {
    const defaultParams = {
      version: '1.1.1',
      format: 'image/png',
      transparent: true,
    };

    const defaultProps = {
      minZoom: 0,
    };

    const updatedLayer = {
      ...defaultProps,
      ...layer,
      params: { ...defaultParams, ...layer.params },
    };

    return <Layer key={layer.id} {...updatedLayer} />;
  };

  const layerGroups = useAppSelector(state => state.layerGroups.data);

  const activeLayers : string[] = useMemo(() =>
    layerGroups.map(layerGroup => layerGroup.layers.map(l => l.checked && l.id).filter(Boolean)).flat(),
    [layerGroups]
  );

  const selectedLayers : LayerProps[] = useMemo(
    () => [
      ...DEFAULT_LAYERS,
      ...(LAYERS.filter((layer) => activeLayers.includes(layer.id)))
    ],
    [activeLayers]
  );

  return <Map projection="antarctic">{selectedLayers.map(renderLayer)}</Map>;
};

export default MainMap;
