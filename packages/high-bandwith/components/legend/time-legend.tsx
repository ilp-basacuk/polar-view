import { FC, useMemo } from 'react';
import { Layer, LayerGroup } from 'types';
import DateRangePicker from 'components/daterange/component';
import { updateLayer } from 'store/features/layerGroups/slice';
import { useAppDispatch } from 'store/hooks';
import layers from 'constants/layers.json';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const layerGroups : LayerGroup[] = require('constants/layerGroups.json');

interface TimeLegendProps {
  layer: Layer,
}

const parseTime = (time: string) => {
  const [startDate, endDate] = time.split('/');
  return { startDate, endDate };
}

const stringifyDate = (date) => date && format(date, 'yyyy-MM-dd');

const TimeLegend: FC<TimeLegendProps> = ({ layer }) => {
  const { time } = layer.params || {};
  const dispatch = useAppDispatch();

  const date = useMemo(() => {
    if (time) {
      return parseTime(time);
    } else {
      // Get default
      const paramLayer = layers.find(l => l.id === layer.id);
      const defaultTime = paramLayer?.params?.time;

      if (defaultTime) {
        return parseTime(defaultTime);
      }
    }
    return { startDate: null, endDate: null };
  }, [time]);


  const setDate = ({ startDate, endDate }) => {
    const layerGroup: LayerGroup = layerGroups.find(group => group.layers.some(l => l.id === layer.id));
    dispatch(updateLayer({
      layerGroupId: layerGroup.id,
      layer: { ...layer, params: { ...layer.params, time: `${startDate}/${endDate}` }}
    }))
  }
  return (
    <div className="mb-3">
      <div className="mb-3">
        <DateRangePicker
          startDate={date?.startDate ? new Date(Date.parse(date?.startDate)) : null}
          endDate={date?.endDate ? new Date(Date.parse(date.endDate)) : null}
          startPlaceHolder="Start Date"
          endPlaceHolder="End Date"
          onChange={(startDate, endDate) => {
            if (startDate && endDate) {

              setDate({ startDate: stringifyDate(startDate), endDate: stringifyDate(endDate) });
            }
          }}
        />
      </div>
    </div>
  );
}

export default TimeLegend;
