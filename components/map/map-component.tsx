/* eslint-disable no-restricted-properties */
import { FC, useMemo, useState } from 'react';

import { MapContainer } from 'react-leaflet';

import * as L from 'leaflet';

import { getProjection } from './projections';
import { MapProps } from './types';
import ZoomControl from './zoom-control';

const MAX_ZOOM = 5;
const TILE_SIZE = 256;
const ARCTIC_CENTER = L.latLng(90, 135);
const ANTARCTIC_CENTER = L.latLng(-90, 0);

const Map: FC<MapProps> = ({ projection = 'artic', children }) => {
  const [map, setMap] = useState<L.Map | undefined>();
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
      zoom={0.25}
      minZoom={0.25}
      maxZoom={MAX_ZOOM}
      attributionControl={false}
      zoomControl={false}
      whenCreated={setMap}
    >
      {children}
      <ZoomControl map={map} />
    </MapContainer>
  );
};

export default Map;
