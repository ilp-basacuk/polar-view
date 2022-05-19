import { FC, useState } from 'react';
import Expandable from 'components/expandable';
import CheckboxGroup from './groups/checkbox-group';
import { useAppSelector } from 'store/hooks';


const SidebarEditView: FC = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data)
  const [expanded, setExpanded] = useState<string>(null);

  return (
    <div className="space-y-1">
      {layerGroups.map((layerGroup, i) =>
        <Expandable
          label={layerGroup.label}
          onExpandChange={() => setExpanded(expanded === layerGroup.id ? null : layerGroup.id)}
          expanded={expanded === layerGroup.id}
          radioButtonProps={{ name: 'EXPANDABLES', value: layerGroup.id }}
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
