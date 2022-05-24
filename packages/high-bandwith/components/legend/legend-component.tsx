import { FC } from 'react';
import legends from 'constants/legends.json';
import LegendItem from 'components/legend/legend-item';

interface LegendProps {
  layer: any,
}

const Legend: FC<LegendProps> = ({ layer }) => {
  const legend = legends[layer.id];
  if(!legend) return null;
  return (
    <>
      {legend.items.map((item) => (
        <LegendItem {...item} key={item.label} />
      ))}
    </>
  );
}
export default Legend;
