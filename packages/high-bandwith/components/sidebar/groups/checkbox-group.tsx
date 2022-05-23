import FilterCheck from 'components/filtercheck';
import { FC } from 'react';
import { useAppDispatch } from 'store/hooks';
import { updateLayer } from 'store/features/layerGroups/slice';
import GroupedDropdowns from './grouped-dropdowns';
import Legend from 'components/legend';

interface CheckboxGroupProps {
  layerGroup: any,
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ layerGroup }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {layerGroup.layers.map(layer => (
        <>
          <FilterCheck
            label={layer.label}
            bullet={layer.color}
            checkboxProps={{
              checked: layer.checked,
              onChange: () => {
                dispatch(
                  updateLayer({
                    layerGroupId: layerGroup.id,
                    layer: { ...layer, checked: !layer.checked }
                  })
                );
              },
            }}
            menuProps={{
              items: [
                { text: 'DOWNLOAD', value: 'download' },
                { text: 'COLOR SETTINGS', value: 'color' },
              ],
            }}
          />
          {layer.checked && layer.groups && <GroupedDropdowns layer={layer} />}
          {layer.checked && <Legend layer={layer} />}
        </>
      ))}
    </div>
  );
};

export default CheckboxGroup;
