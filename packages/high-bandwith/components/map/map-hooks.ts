/* eslint-disable no-restricted-properties */
import { useEffect } from 'react';
import LeafletWmsSource from './leaflet-wms-source';

const LAYERS = require('constants/layers.json');

// This hook adds and removes layers from the map depending on the activeLayerIds
export const useLayerManager = (map, setSources, basemapIds, layerIds, activeLayerIds, sources, setActiveLayerIds) => {
  useEffect(() => {
    const DEFAULT_LAYER_PARAMS = {
      version: '1.1.1',
      format: 'image/png',
      transparent: true,
      tiled: true,
    };

    const addLayerToMap = (layerConfig, params = {}) => {
      const layerSource = new LeafletWmsSource(
        layerConfig.url,
        {
          ...DEFAULT_LAYER_PARAMS,
          ...layerConfig,
          ...layerConfig.params,
          ...params
        }
      );
      setSources({ ...sources,
        [layerConfig.id]: layerSource
      });

      layerSource.addSubLayer(layerConfig.params.layers);
      layerSource.addTo(map);
    }

    const removeLayerFromMap = (layerId) => {
      const layer = LAYERS.find(layer => layer.id === layerId);
      const layerSource = layer?.params.layers;
      if (layerSource && sources[layerId]) {
        sources[layerId].removeSubLayer(layerSource);
      }
    }

    if (map) {
      if (basemapIds) {
        const notIncludedBasemapIds = basemapIds.filter(id => !activeLayerIds.includes(id));
        if (notIncludedBasemapIds.length) {
          notIncludedBasemapIds.forEach((id: string) => {
            addLayerToMap(LAYERS.find(layer => layer.id === id));
          });
          setActiveLayerIds(activeLayerIds.concat(notIncludedBasemapIds));
        }
      }

      if (layerIds) {
        const layerIdsToRemove = activeLayerIds.filter(id => !basemapIds.includes(id) && !layerIds.includes(id));
        if (layerIdsToRemove.length) {
          layerIdsToRemove.forEach((id: string) => {
            removeLayerFromMap(id);
          });
          setActiveLayerIds(activeLayerIds.filter(id => !layerIdsToRemove.includes(id)));
        }

        const notIncludedLayerIds = layerIds.filter(id => !activeLayerIds.includes(id));
        if (notIncludedLayerIds.length) {
          notIncludedLayerIds.forEach((id: string) => {
            const layerConfigToAdd = LAYERS.find(layer => layer.id === id);
            if (layerConfigToAdd) {
              addLayerToMap(layerConfigToAdd);
            }
          });
          setActiveLayerIds(activeLayerIds.concat(notIncludedLayerIds));
        }
      }
    }
  }, [map, setSources, basemapIds, layerIds, activeLayerIds, sources, setActiveLayerIds]);
}
