import { useState, FC } from 'react';

import { useMapEvents } from 'react-leaflet';

const LatLonText: FC = () => {
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

export default LatLonText;
