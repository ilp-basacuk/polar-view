/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';

import Map from 'components/map';

import { MainMapProps } from './types';
import { useAppSelector } from 'store/hooks';

const DEFAULT_LAYER_IDS : string[] = ['graticule', 'land-mask'];

const MainMap: FC<MainMapProps> = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data);

  const activeLayerIds : string[] = useMemo(() =>
    layerGroups.map(layerGroup => layerGroup.layers.map(l => l.checked && l.id).filter(Boolean)).flat(),
    [layerGroups]
  );


  return <Map projection="antarctic" basemapIds={DEFAULT_LAYER_IDS} layerIds={activeLayerIds} />
};

export default MainMap;
