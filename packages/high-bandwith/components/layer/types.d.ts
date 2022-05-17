import { WMSParams } from '@types/react-leaflet';

export interface LayerProps {
  url: string;
  params: WMSParams;
  minZoom?: number;
  tileSize: number;
  className?: string;
}
