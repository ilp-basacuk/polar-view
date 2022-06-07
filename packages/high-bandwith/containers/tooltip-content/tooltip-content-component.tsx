import { FC } from 'react';
import Button from 'components/button';
import { parseToUTC } from 'utils/date';

import exampleImage from 'public/images/example-sar.png';

interface TooltipContentProps {
 tooltipInfo: { [ key: string ]: any };
};

const TooltipContent: FC<TooltipContentProps> = ({ tooltipInfo } : TooltipContentProps) => (
  <div className="px-3 bg-blur z-50 text-white border border-mainblue text-xs" style={{ width: "240px", height: "340px" }}>
    <div className="mb-6" style={{ width: "224px", height: "224px" }}>
      {/* {tooltipInfo && tooltipInfo.filename} */}
      <img src={exampleImage} />
    </div>
    <div className="text-mainblue text-xs uppercase mb-4">
      <div className="mb-1">
        {tooltipInfo && tooltipInfo.layerId}
      </div>
      <div>
        {tooltipInfo && parseToUTC(tooltipInfo.acqtime)}
      </div>
    </div>
    <div className="flex w-full justify-between">
      <div className="w-24 mr-1">
        <Button theme="primary" onClick={() =>{}}>View</Button>
      </div>
      <Button theme="primary" onClick={() =>{}}>Download</Button>
    </div>
  </div>
);

export default TooltipContent;
