import { FC, useState, useMemo, useEffect } from 'react';
import Select from 'components/forms/select';
import { updateLayer } from 'store/features/layerGroups/slice';
import { useAppDispatch } from 'store/hooks';
import useChangeEffect from 'components/hooks/useChangeState';

interface GroupedDropdownsProps {
  layer: any,
}

const GroupedDropdowns: FC<GroupedDropdownsProps> = ({ layer }) => {
  const [selectedGroup, setSelectedGroup] = useState(layer.layers.find(l => l.checked)?.group || null)
  const [selectedLayer, setSelectedLayer] = useState(layer.layers.find(l => l.checked)?.id || null);
  const groupOptions = layer.groups.map(group => ({ label: group.label, value: group.id }));
  const layerOptions = useMemo(() => layer.layers.filter(l => l.group === selectedGroup).map(l => ({ label: l.label, value: l.id })), [selectedGroup]);

  useChangeEffect(() => {
    setSelectedLayer(null);
  }, [selectedGroup]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateLayer({
      layerGroupId: layer.id, // Layer group id should be always the same as the layer id for grouped layers
      layer: { ...layer, layers: layer.layers.map(l => ({ ...l, checked: l.id === selectedLayer })) }
    }))
  }, [selectedLayer]);

  return (
    <>
      <div className="py-1">
        <Select
          id={`${layer.id}-group-select`}
          initialSelected={selectedGroup}
          onChange={setSelectedGroup}
          options={groupOptions}
        />
      </div>
      <div className="py-1">
        <Select
          id={`${layer.id}-layer-select`}
          initialSelected={selectedLayer}
          onChange={setSelectedLayer}
          options={layerOptions}
          selected={selectedLayer}
        />
      </div>
    </>
  );
}
export default GroupedDropdowns;
