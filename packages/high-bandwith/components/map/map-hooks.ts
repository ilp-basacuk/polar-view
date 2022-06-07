/* eslint-disable no-restricted-properties */
import { useEffect, useMemo } from 'react';
import LeafletWmsSource from './leaflet-wms-source';
import { Layer } from 'types';

const LAYERS = require('constants/layers.json');

// This hook adds and removes layers from the map depending on the activeLayerIds
export const useLayerManager = ({ map, setSources, basemapIds, layerIds, activeLayerIds, sources, setActiveLayerIds, layerGroups }) => {
  const getParamsToChange = (layerParams: Layer, sources: typeof LeafletWmsSource.source) => (
    Object.keys(layerParams).reduce((acc, layerId) => {
      if (activeLayerIds.includes(layerId)){
        const currentParams = sources[layerId].options;
        const newParams = layerParams[layerId];
        Object.keys(newParams).forEach(paramKey => {
          if (currentParams[paramKey] !== newParams[paramKey]) {
            if (!acc[layerId]) {
              acc[layerId] = {};
            }
            acc[layerId][paramKey] = newParams[paramKey];
          }
        })
      }
      return acc;
    }, {})
  );

  const layerParams = useMemo(() => (
    layerGroups.reduce((acc, layerGroup) => {
      layerGroup.layers.forEach(layer => {
        if(layer.params) {
          acc[layer.id] = layer.params;
        }
      });
      return acc;
    }, {})
  ), [layerGroups])

  useEffect(() => {
    const DEFAULT_LAYER_PARAMS = {
      version: '1.1.1',
      format: 'image/png',
      transparent: true,
      tiled: true,
    };

    const addLayerToMap = (layerConfig) => {
      const params = (layerParams && layerParams[layerConfig.id]) || {};
      const layerSource = new LeafletWmsSource(
        layerConfig.url,
        {
          ...DEFAULT_LAYER_PARAMS,
          ...layerConfig,
          ...layerConfig.params,
          ...params
        }
      );

      layerSource.addSubLayer(layerConfig.params.layers);
      layerSource.addTo(map);

      return { [layerConfig.id]: layerSource };

    }

    const removeLayers = (layerIds: string[]) => {
      const removeLayerFromMap = (layerId) => {
        const layer = LAYERS.find(layer => layer.id === layerId);
        const layerSource = layer?.params.layers;
        if (layerSource && sources[layerId]) {
          sources[layerId].removeSubLayer(layerSource);
        }
      }
      const layerIdsToRemove = activeLayerIds.filter(id => !basemapIds.includes(id) && !layerIds.includes(id));
      if (layerIdsToRemove.length) {
        layerIdsToRemove.forEach((id: string) => {
          removeLayerFromMap(id);
        });
        setActiveLayerIds(activeLayerIds.filter(id => !layerIdsToRemove.includes(id)));
      }
    };

    const addLayers = (layerIds: string[]) => {
      const notIncludedLayerIds = layerIds.filter(id => !activeLayerIds.includes(id));
      let sourcesAdded = {};
      if (notIncludedLayerIds.length) {
        notIncludedLayerIds.map((id: string) => {
          const layerConfigToAdd = LAYERS.find(layer => layer.id === id);

          if (layerConfigToAdd) {
            const newSource = addLayerToMap(layerConfigToAdd);
            sourcesAdded = {...sourcesAdded, ...newSource };
          }
        });
        setActiveLayerIds(activeLayerIds.concat(notIncludedLayerIds));
        setSources({ ...sources, ...sourcesAdded });
      }
    };

    const updateLayerParams = () => {
      const paramsToChange = getParamsToChange(layerParams, sources);
      if(Object.keys(paramsToChange).length) {
        Object.keys(paramsToChange).forEach(layerId => {
          sources[layerId]._overlay.setParams({...sources[layerId].options.params, ...paramsToChange[layerId] });
        })
      }
    };

    if (map) {
      if (basemapIds) {
        addLayers(basemapIds);
      }

      if (layerIds) {
        removeLayers(layerIds);
        addLayers(layerIds);
        updateLayerParams();
      }
    }
  }, [map, setSources, basemapIds, layerIds, activeLayerIds, sources, setActiveLayerIds, layerParams]);
}
