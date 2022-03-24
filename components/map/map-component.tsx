/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';

import { MapContainer } from 'react-leaflet';

import * as L from 'leaflet';

import { getProjection } from './projections';
import { MapProps } from './types';

const MAX_ZOOM = 5;
const TILE_SIZE = 256;
const ARCTIC_CENTER = L.latLng(90, 135);
const ANTARCTIC_CENTER = L.latLng(-90, 0);

const Map: FC<MapProps> = ({ projection = 'artic', children }) => {
  const crs = useMemo(() => getProjection(projection, MAX_ZOOM, TILE_SIZE), [projection]);
  const center = useMemo(
    () => (projection === 'artic' ? ARCTIC_CENTER : ANTARCTIC_CENTER),
    [projection]
  );

  return (
    <MapContainer
      key={`map-${projection}`}
      className="w-full h-full"
      crs={crs}
      center={center}
      zoom={0}
      minZoom={0}
      maxZoom={MAX_ZOOM}
    >
      {children}
    </MapContainer>
  );
};

export default Map;
