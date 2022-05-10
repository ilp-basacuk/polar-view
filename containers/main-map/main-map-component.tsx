/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';

import Layer from 'components/layer';
import Map from 'components/map';

import LAYERS from './layers.json';
import { MainMapProps } from './types';

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

    return <Layer {...updatedLayer} />;
  };

  const activeLayers = ['graticule', 'land-mask'];

  const selectedLayers = useMemo(
    () => LAYERS.filter((layer) => activeLayers.includes(layer.id)),
    [activeLayers]
  );

  return <Map projection="antarctic">{selectedLayers.map(renderLayer)}</Map>;
};

export default MainMap;
