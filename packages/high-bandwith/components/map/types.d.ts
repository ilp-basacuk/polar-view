import type { Map } from 'react-leaflet';

export interface MapProps {
  projection: 'artic' | 'antarctic';
  setMap?: (map: Map) => void;
  basemapIds: string[],
  layerIds: string[],
}
