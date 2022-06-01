import { FC } from 'react';
import LegendItem from 'components/legend/legend-item';
import { Layer } from 'types';
import TimeLegend from './time-legend';

const legends = require('constants/legends.json');

interface LegendProps {
  layer: Layer,
}

const Legend: FC<LegendProps> = ({ layer }) => {
  const legend = legends[layer.id];
  if (!legend) return null;

  if (legend.type === 'time') {
    return <TimeLegend layer={layer} />;
  };

  if (legend.type === 'gradient') {
    return (
      <div className="text-white text-tiny mb-3 py-1">
        <div className={`${legend.gradient || 'sea-ice-map-gradient'} h-2`} />
        <div className="flex justify-between mt-2.5">
          <span>{legend.startLabel || '0%'}</span>
          <span>{legend.endLabel || '100%'}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {legend.items.map((item) => (
        <LegendItem {...item} key={item.label} />
      ))}
    </>
  );
}
export default Legend;
