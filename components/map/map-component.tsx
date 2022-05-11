/* eslint-disable no-restricted-properties */
import { FC, useMemo, useState } from 'react';

import { MapContainer, ScaleControl, useMapEvents } from 'react-leaflet';

import * as L from 'leaflet';

import { getProjection } from './projections';
import { MapProps } from './types';
import ZoomControl from './zoom-control';

const MIN_ZOOM = 0.25;
const MAX_ZOOM = 5;
const TILE_SIZE = 256;
const ARCTIC_CENTER = L.latLng(90, 135);
const ANTARCTIC_CENTER = L.latLng(-90, 0);
const MAX_BOUNDS_ANTARCTIC = L.latLngBounds(L.latLng(-37, -46), L.latLng(-26, 135));

const LatLonText: FC<{}> = () => {
  const [lat, setLat] = useState<number | undefined>();
  const [lon, setLon] = useState<number | undefined>();
  useMapEvents({
    mousemove(e) {
      setLat(Math.round(e.latlng.lat * 100) / 100);
      setLon(Math.round(e.latlng.lng * 100) / 100);
    },
  });
  return (
    <div className="absolute bottom-8 right-3 w-40 text-mainblue z-50">
      Long: {lon}, Lat: {lat}
    </div>
  );
};

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
      zoom={MIN_ZOOM}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      attributionControl={false}
      zoomControl={false}
      maxBounds={projection === 'antarctic' ? MAX_BOUNDS_ANTARCTIC : undefined}
    >
      {children}
      <ZoomControl minZoom={MIN_ZOOM} maxZoom={MAX_ZOOM} />
      <ScaleControl position="bottomright" />
      <LatLonText />
    </MapContainer>
  );
};

export default Map;
