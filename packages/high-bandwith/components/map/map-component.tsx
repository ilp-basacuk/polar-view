/* eslint-disable no-restricted-properties */
import { FC, useMemo, useEffect, useState } from 'react';
import { MapContainer, ScaleControl, useMapEvents, useMap } from 'react-leaflet';
import cx from 'classnames';
import * as L from 'leaflet';
import Tooltip from 'components/tooltip';
import TooltipContent from 'containers/tooltip-content';
import { getProjection } from './projections';
import { MapProps } from './types';
import ZoomControl from './zoom-control';
import LatLonText from './lat-lon-text';
import LeafletWmsSource from './leaflet-wms-source';
import { useLayerManager } from './map-hooks';
import { useAppSelector } from 'store/hooks';

const MIN_ZOOM = 0.25;
const MAX_ZOOM = 5;
const TILE_SIZE = 256;
const ARCTIC_CENTER = L.latLng(90, 135);
const ANTARCTIC_CENTER = L.latLng(-90, 0);
const MAX_BOUNDS_ANTARCTIC = L.latLngBounds(L.latLng(-37, -46), L.latLng(-26, 135));

const MapReference = ({ setMap }) => {
  const map = useMap();
  useEffect(() => {
    setMap(map);
  }, [map, setMap]);
  return null;
};

const MapInteraction = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e);
    },
    // Use for different events:
    // mousemove(e) {
    //   onMouseMove(e)
    // }
  });
  return null;
};

const Map: FC<MapProps> = ({ projection = 'artic', children, basemapIds, layerIds }) => {
  const [sources, setSources] = useState<{ [key: string]: typeof LeafletWmsSource }>();
  const [map, setMap] = useState();
  const [tooltipInfo, setTooltipInfo] = useState<{ [key: string]: any }>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>(null);

  const [activeLayerIds, setActiveLayerIds] = useState<string[]>([]);

  const layerGroups = useAppSelector((state) => state.layerGroups.data);

  const crs = useMemo(() => getProjection(projection, MAX_ZOOM, TILE_SIZE), [projection]);
  const center = useMemo(
    () => (projection === 'artic' ? ARCTIC_CENTER : ANTARCTIC_CENTER),
    [projection],
  );
  const layersWithImages = useMemo(
    () =>
      layerGroups.reduce((acc, layerGroup) => {
        layerGroup.layers.forEach((layer) => {
          if (layer.hasImages) acc.push(layer.id);
        });
        return acc;
      }, []),
    [layerGroups],
  );
  const onClick = (e) => {
    setTooltipInfo(null);
    const firstImageSourceId =
      sources && Object.keys(sources).find((layerId) => layersWithImages.includes(layerId));
    if (firstImageSourceId) {
      const identifyPromise = sources[firstImageSourceId].identify(e);
      if (identifyPromise) {
        identifyPromise.then((info) => {
          if (info?.features?.length > 0) {
            setTooltipInfo({ ...info.features[0].properties, layerCode: info.layerCode });
            setTooltipPosition({ x: e.containerPoint.x, y: e.containerPoint.y });
          }
        });
      }
    }
  };

  useLayerManager({
    map,
    setSources,
    basemapIds,
    layerIds,
    activeLayerIds,
    sources,
    setActiveLayerIds,
    layerGroups,
  });

  return (
    <>
      <MapContainer
        key={`map-${projection}`}
        className="z-0 w-full h-full"
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
        <MapReference setMap={setMap} />
        <ZoomControl minZoom={MIN_ZOOM} maxZoom={MAX_ZOOM} />
        <ScaleControl position="bottomright" />
        <LatLonText />
        <MapInteraction onClick={onClick} />
      </MapContainer>

      <Tooltip
        followCursor="initial"
        interactive
        placement="auto"
        visible={!!tooltipInfo}
        content={<TooltipContent tooltipInfo={tooltipInfo} />}
      >
        {/* Dummy invisible component for the tooltip positioning on click */}
        <span
          className={cx('h-2 w-2 display-none', { absolute: !!tooltipInfo })}
          style={{ left: tooltipPosition?.x, top: tooltipPosition?.y }}
        />
      </Tooltip>
    </>
  );
};

export default Map;
