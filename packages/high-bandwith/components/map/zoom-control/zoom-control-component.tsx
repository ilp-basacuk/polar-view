import { SyntheticEvent, useState, FC } from 'react';

import { useMap, useMapEvents } from 'react-leaflet';

import Button from 'components/button';

interface ZoomControlProps {
  minZoom: number;
  maxZoom: number;
}

const ZoomControl: FC<ZoomControlProps> = ({ minZoom, maxZoom }) => {
  const map = useMap();
  const [zoom, setZoom] = useState(map && map.getZoom());

  useMapEvents({
    zoomend() {
      setZoom(map.getZoom());
    },
  });

  const zoomIn: (e: SyntheticEvent) => void = (e) => {
    e.preventDefault();
    if (map) {
      map.setZoom(map.getZoom() + 1);
    }
  };

  const zoomOut: (e: SyntheticEvent) => void = (e) => {
    e.preventDefault();
    if (map) {
      map.setZoom(map.getZoom() - 1);
    }
  };

  return (
    <div className="leaflet-bar absolute flex flex-col z-50 right-3 top-1/2">
      <Button
        className="leaflet-control-zoom-in border-b-0 block mb-0.5"
        type="button"
        title="Zoom in"
        aria-label="Zoom in"
        theme="primary"
        onClick={zoomIn}
        cut="left-top"
        disabled={zoom && zoom >= maxZoom}
      >
        +
      </Button>
      <Button
        className="leaflet-control-zoom-out block border-t-0"
        type="button"
        title="Zoom out"
        aria-label="Zoom out"
        theme="primary"
        onClick={zoomOut}
        cut="right-bottom"
        disabled={zoom && zoom <= minZoom}
      >
        −
      </Button>
    </div>
  );
};

export default ZoomControl;
