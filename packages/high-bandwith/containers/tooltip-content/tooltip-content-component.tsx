import { FC, useMemo } from 'react';
import Button from 'components/button';
import Divider from 'components/divider';
import { parseToUTC } from 'utils/date';
import { layerCodesLayerIds } from 'constants/layer-constants';
const layersConfig = require('constants/layers-config.json');

interface TooltipContentProps {
 tooltipInfo: { [ key: string ]: any };
};

const TooltipContent: FC<TooltipContentProps> = ({ tooltipInfo } : TooltipContentProps) => {
  if (!tooltipInfo) return null;

  const { layerCode, acqtime, filename } = tooltipInfo;

  const layerId = useMemo(() => layerCodesLayerIds[layerCode], [layerCode]);

  const layerLabel = useMemo(() => {
    let label: string;
    layersConfig.find(layerGroup => {
      return layerGroup.layers.find(layer => {
        if (layer.id === layerId) {
          label = layer.label;
        }
        return false;
      });
    });
    return label;
  }, [layerId]);

  const layerDownloads = useMemo(() => {
    let downloadTemplates : { image: string, type: string, caption: string }[];
    layersConfig.find(layerGroup => {
      return layerGroup.layers.find(layer => {
        if (layer.id === layerId) {
          if (layer.downloadTemplates) {
            downloadTemplates = layer.downloadTemplates;
          }
          return true;
        }
        return false;
      });
    });
    const month = acqtime && acqtime.split('-')[0] + acqtime.split('-')[1];
    downloadTemplates = downloadTemplates?.map(template => ({...template, image: template.image.replace('{filename}', filename).replace('{month}', month).replace('.tif', '')}));
    return downloadTemplates;
  }, [layerId]);

  return (
    <div className="p-3 bg-navyblue z-50 text-white border border-mainblue text-xs" style={{ width: "240px" }}>
      <div className="mb-6" style={{ width: "224px", height: "224px" }}>
        <img src={layerDownloads?.find(l => l.type === 'thumbnail')?.image} title="thumbnail" />
      </div>
      <div className="text-mainblue mb-2">
        <div className="text-mainblue mb-1">
          {layerLabel}
        </div>
        <div className="text-mainblue">
          {tooltipInfo && parseToUTC(acqtime)}
        </div>
      </div>
      <div className="text-mainblue text-xs my-4">
        <Divider label="Downloads" />
      </div>
      <div className="text-xs my-4">

        {layerDownloads?.filter(l => l.type === 'download').map(layerDownload =>
          <div className="mb-1 text-white underline">
            <a href={layerDownload.image} target="_blank" title={layerDownload.caption}>{layerDownload.caption}</a>
          </div>
        )}
      </div>
      <div className="flex w-full justify-between">
        <Button className="px-4" theme="primary" onClick={() =>
          window.open(layerDownloads?.find(l => l.type === 'explore')?.image, '_blank')
        }>Explore</Button>
      </div>
    </div>
  );
};

export default TooltipContent;
