/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';

import Layer from 'components/layer';
import Map from 'components/map';

import LAYERS from './layers.json';
import { MainMapProps } from './types';
import { useAppSelector } from 'store/hooks';


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

  const layerGroups = useAppSelector(state => state.layerGroups.data)
  const defaultLayers = ['graticule', 'land-mask'];
  const changingActiveLayers = layerGroups.map(layerGroup => layerGroup.layers.map(l => l.checked && l.id).filter(Boolean)).flat();
  const activeLayers = [...defaultLayers, ...changingActiveLayers];
  const selectedLayers = useMemo(
    () => LAYERS.filter((layer) => activeLayers.includes(layer.id)),
    [activeLayers]
  );

  return <Map projection="antarctic">{selectedLayers.map(renderLayer)}</Map>;
};

export default MainMap;
