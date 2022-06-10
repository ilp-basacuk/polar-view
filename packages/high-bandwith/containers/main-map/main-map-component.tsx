/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { MainMapProps } from './types';
import { useAppSelector } from 'store/hooks';

import type { MapProps } from 'components/map/types';

const MapNoSSR = dynamic(import('components/map'), { ssr: false }) as React.FC<MapProps>;

const DEFAULT_LAYER_IDS: string[] = ['graticule', 'land-mask'];

const MainMap: FC<MainMapProps> = () => {
  const layerGroups = useAppSelector((state) => state.layerGroups.data);

  const activeLayerIds: string[] = useMemo(
    () =>
      layerGroups
        .map((layerGroup) => layerGroup.layers.map((l) => l.checked && l.id).filter(Boolean))
        .flat(),
    [layerGroups],
  );

  return (
    <MapNoSSR projection="antarctic" basemapIds={DEFAULT_LAYER_IDS} layerIds={activeLayerIds} />
  );
};

export default MainMap;
