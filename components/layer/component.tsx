import { FC } from 'react';

import { WMSTileLayer } from 'react-leaflet';

import type { LayerProps } from './types';

export const Layer: FC<LayerProps> = ({ url, params, minZoom, tileSize }: LayerProps) => (
  <WMSTileLayer url={url} params={params} minZoom={minZoom} tileSize={tileSize} />
);

export default Layer;
