import { FC } from 'react';

import { WMSTileLayer } from 'react-leaflet';

import type { LayerProps } from './types';

const DEFAULT_LAYER_PARAMS = {
  version: '1.1.1',
  format: 'image/png',
  transparent: true,
};

export const Layer: FC<LayerProps> = ({
  url,
  params,
  minZoom,
  tileSize,
  className,
}: LayerProps) => (
  <WMSTileLayer
    url={url}
    params={{...DEFAULT_LAYER_PARAMS, ...params}}
    minZoom={minZoom || 0}
    tileSize={tileSize}
    className={className}
  />
);

export default Layer;
