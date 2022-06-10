import type { Layer } from 'types';
const layers = require('constants/layers.json');

type LayerCodesLayerIds = { [key: string]: string };

export const layerCodesLayerIds: LayerCodesLayerIds = layers.reduce(
  (acc: LayerCodesLayerIds, layer: Layer) => {
    acc[layer.params?.layers] = layer.id;
    return acc;
  },
  {},
);
