/* eslint-disable no-restricted-properties */
import { FC, useMemo, useEffect, useState, useRef } from 'react';
import { MapContainer, ScaleControl, useMapEvents, useMap } from 'react-leaflet';
import Tooltip from 'components/tooltip';

import * as L from 'leaflet';

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
    setMap(map)
  }, [map])
  return null;
};

const MapInteraction = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e)
    },
  });
  return null;
}

const Map: FC<MapProps> = ({ projection = 'artic', children, basemapIds, layerIds }) => {
  const [sources, setSources] = useState<{ [key: string] : typeof LeafletWmsSource }>();
  const [map, setMap] = useState();
  const [tooltipInfo, setTooltipInfo] = useState<{ [key: string] : any }>(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (tooltipRef.current && tooltipInfo) {
      tooltipRef.current.open();
    }
    if (tooltipRef.current && !tooltipInfo) {
      tooltipRef.current.close();
    }
  }, [tooltipInfo, tooltipRef]);
  const [activeLayerIds, setActiveLayerIds] = useState<string[]>([]);

  const crs = useMemo(() => getProjection(projection, MAX_ZOOM, TILE_SIZE), [projection]);
  const center = useMemo(
    () => (projection === 'artic' ? ARCTIC_CENTER : ANTARCTIC_CENTER),
    [projection]
  );

  const onClick = (e) => {
    if (sources && sources['sar-subset']) {
      sources['sar-subset'].identify(e).then((info) => info.features && info.features.length > 0 && setTooltipInfo({...info.features[0].properties, layerId: info.layerId }));
    }
  }

  const layerGroups = useAppSelector(state => state.layerGroups.data);
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

  useLayerManager({ map, setSources, basemapIds, layerIds, activeLayerIds, sources, setActiveLayerIds, layerParams });

  return (
    <>
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
        <MapReference setMap={setMap} />
        <ZoomControl minZoom={MIN_ZOOM} maxZoom={MAX_ZOOM} />
        <ScaleControl position="bottomright" />
        <LatLonText />
        <MapInteraction onClick={onClick}/>
      </MapContainer>
      <Tooltip
        ref={tooltipRef}
        content={
          <div className="px-10">
            <div>
              {tooltipInfo && tooltipInfo.filename}
            </div>
            <div>
              {tooltipInfo && tooltipInfo.layerId}
            </div>
            <div>
              {tooltipInfo && tooltipInfo.acqtime}
            </div>
          </div>
        }
      />
    </>
  );
};

export default Map;
