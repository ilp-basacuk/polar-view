/* eslint-disable no-restricted-properties */
import * as L from 'leaflet';
import Proj from 'proj4leaflet';

export const getProjection = (projection: string, MAX_ZOOM, TILE_SIZE) => {
  const getResolutions = (extent) =>
    Array(MAX_ZOOM + 1)
      .fill(null)
      .map((_, i) => extent / TILE_SIZE / Math.pow(2, i - 1));

  const getProjectionAttributes = (extent) => ({
    origin: [-extent, extent],
    bounds: L.bounds(L.point(-extent, extent), L.point(extent, -extent)),
    resolutions: getResolutions(extent),
  });

  if (projection === 'artic') {
    const extent = Math.sqrt(2) * 6371007.2;
    return new Proj.CRS(
      'EPSG:3575',
      '+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      getProjectionAttributes(extent)
    );
  }

  if (projection === 'antarctic') {
    const extent = -4194304;
    return new Proj.CRS(
      'EPSG:3031',
      '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
      getProjectionAttributes(extent)
    );
  }

  return null;
};

export default getProjection;
