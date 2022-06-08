import FilterCheck from 'components/filtercheck';
import { FC } from 'react';
import { useAppDispatch } from 'store/hooks';
import { updateLayer } from 'store/features/layerGroups/slice';
import GroupedDropdowns from './grouped-dropdowns';
import Legend from 'components/legend';
import type { LayerGroup, GroupedLayer, SingleLayer } from 'types';

interface CheckboxGroupProps {
  layerGroup: LayerGroup,
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ layerGroup }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {layerGroup.layers.map((layer: (GroupedLayer | SingleLayer)) => (
        <div key={layer.id}>
          <FilterCheck
            label={layer.label}
            bullet={layer.type !== 'grouped-dropdown' ? layer.color : null}
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
          />
          {layer.checked && layer.type === 'grouped-dropdown' && layer.groups && layer.layers && <GroupedDropdowns layer={layer} />}
          {layer.checked && <Legend layer={layer} />}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
