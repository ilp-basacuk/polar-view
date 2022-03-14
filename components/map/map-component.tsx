/* eslint-disable no-restricted-properties */
import { FC, useMemo } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';

import * as L from 'leaflet';

import { getProjection } from './projections';
import { MapProps } from './types';

const ARCTIC_TILES_URL = 'https://tile.gbif.org/3575/omt/{z}/{x}/{y}@4x.png?style=osm-bright-en';
const ANTARCTIC_TILES_URL =
  'http://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg';
const MAX_ZOOM = 16;
const TILE_SIZE = 512;
const ARCTIC_CENTER = L.latLng(90, 135);

const Map: FC<MapProps> = ({ projection = 'artic' }) => {
  const crs = useMemo(() => getProjection(projection, MAX_ZOOM, TILE_SIZE), [projection]);
  const tiles = useMemo(
    () => (projection === 'artic' ? ARCTIC_TILES_URL : ANTARCTIC_TILES_URL),
    [projection]
  );

  return (
    <MapContainer
      className="w-full h-full"
      crs={crs}
      center={ARCTIC_CENTER}
      continuousWorld
      zoom={2}
      minZoom={2}
      maxZoom={MAX_ZOOM}
    >
      <TileLayer attribution="" url={tiles} tileSize={TILE_SIZE} minZoom={2} maxZoom={MAX_ZOOM} />
    </MapContainer>
  );
};

export default Map;
