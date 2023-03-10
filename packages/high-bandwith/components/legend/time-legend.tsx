import { FC, useMemo } from 'react';
import { Layer, LayerGroup } from 'types';
import { add } from 'date-fns';
import DatePickerCombo from 'components/datepickercombo';
import { updateLayer } from 'store/features/layerGroups/slice';
import { useAppDispatch } from 'store/hooks';
import { stringifyDate } from 'utils/date';

import layers from 'constants/layers.json';
import layerGroupsJSON from 'constants/layer-groups.json';

const layerGroups = layerGroupsJSON as LayerGroup[];

interface TimeLegendProps {
  layer: Layer;
}

const parseTime = (time: string) => {
  const [startDate, endDate] = time.split('/');
  return { startDate, endDate };
};

const TimeLegend: FC<TimeLegendProps> = ({ layer }) => {
  const { time } = layer.params || {};
  const dispatch = useAppDispatch();
  const layerGroup: LayerGroup = useMemo(
    () => layerGroups.find((group) => group.layers.some((l) => l.id === layer.id)),
    [layer],
  );

  const date = useMemo(() => {
    if (time) {
      return parseTime(time);
    } else {
      // Get default
      const paramLayer = layers.find((l) => l.id === layer.id);
      const defaultTime = paramLayer?.params?.time;

      if (defaultTime) {
        return parseTime(defaultTime);
      }
    }
    return { startDate: null, endDate: null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const setDate = ({ startDate, endDate = null }) => {
    dispatch(
      updateLayer({
        layerGroupId: layerGroup.id,
        layer: {
          ...layer,
          params: { ...layer.params, time: endDate ? `${startDate}/${endDate}` : startDate },
        },
      }),
    );
  };

  return (
    <div className="mb-3">
      <DatePickerCombo
        onChange={(dateOrLastDays: Date | number) => {
          const isDate = dateOrLastDays instanceof Date;
          if (isDate) {
            setDate({ startDate: stringifyDate(dateOrLastDays) });
          } else {
            const startDate = stringifyDate(add(new Date(), { days: dateOrLastDays }));
            setDate({ startDate, endDate: stringifyDate(new Date()) });
          }
        }}
        dateProps={{
          placeholderText: 'Select a date',
          startDate: date?.startDate ? new Date(Date.parse(date?.startDate)) : null,
        }}
      />
    </div>
  );
};

export default TimeLegend;
