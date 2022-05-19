import { FC, useState } from 'react';
import Expandable from 'components/expandable';
import CheckboxGroup from './groups/checkbox-group';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { activatePreset } from 'store/features/layerGroups/slice';

const SidebarEditView: FC = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data);
  const activePreset = useAppSelector(state => state.layerGroups.activePreset);

  const [expanded, setExpanded] = useState<string>(null);

  const dispatch = useAppDispatch();

  const handleRadioChange = (layerGroupId) => {
    dispatch(activatePreset({ presetId: layerGroupId }));
    setExpanded(layerGroupId);
  }

  return (
    <div className="space-y-1">
      {layerGroups.map((layerGroup, i) =>
        <Expandable
          label={layerGroup.label}
          onExpandChange={() => setExpanded(expanded === layerGroup.id ? null : layerGroup.id)}
          expanded={expanded === layerGroup.id}
          radioButtonProps={{ name: `expandable-${layerGroup.id}`, value: layerGroup.id, checked: activePreset === layerGroup.id, onChange: () => handleRadioChange(layerGroup.id) }}
          content={<CheckboxGroup layerGroup={layerGroup} />}
          activeLayersNumber={layerGroup.layers.filter(l => l.checked).length || null}
          first={i === 0}
          last={i === layerGroups.length - 1}
        />
      )}
    </div>
  );
};

export default SidebarEditView;
