/* eslint-disable no-restricted-properties */
import * as L from 'leaflet';
import Proj from 'proj4leaflet';

export const getProjection = (projection: string, MAX_ZOOM, TILE_SIZE) => {
  const getResolutions = (extent) =>
    Array(MAX_ZOOM + 1)
      .fill(null)
      .map((_, i) => extent / TILE_SIZE / Math.pow(2, i - 1));

  if (projection === 'artic') {
    return new Proj.CRS(
      'EPSG:3413',
      '+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 ' +
        '+ellps=WGS84 +datum=WGS84 +units=m +no_defs',
      {
        origin: [-4194304, 4194304],
        resolutions: getResolutions(4194304),
        bounds: L.bounds([
          [-4194304, -4194304],
          [4194304, 4194304],
        ]),
      }
    );
  }

  if (projection === 'antarctic') {
    return new Proj.CRS(
      'EPSG:3031',
      '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 ' +
        '+ellps=WGS84 +datum=WGS84 +units=m +no_defs',
      {
        origin: [-4194304, 4194304],
        resolutions: [8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0],
        bounds: new L.Bounds([
          [-4194304, -4194304],
          [4194304, 4194304],
        ]),
      }
    );
  }

  return null;
};

export default getProjection;
