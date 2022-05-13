import * as L from 'leaflet';

import Button from 'components/button';

const ZoomControl = ({ map }: { map: L.Map }) => {
  const zoomIn = (e) => {
    e.preventDefault();
    if (map) {
      map.setZoom(map.getZoom() + 1);
    }
  };
  const zoomOut = (e) => {
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
        disabled={map && map.getZoom() > 12}
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
        disabled={map && map.getZoom() < 0.5}
      >
        −
      </Button>
    </div>
  );
};

export default ZoomControl;
