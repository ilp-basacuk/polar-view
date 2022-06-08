import { FC, useState } from 'react';
import Expandable from 'components/expandable';
import CheckboxGroup from '../groups/checkbox-group';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { activatePreset } from 'store/features/layerGroups/slice';
import Button from 'components/button';
import Modal from 'components/modal';

const SidebarEditView: FC = () => {
  const [expanded, setExpanded] = useState<string>(null);
  const [modal, setModal] = useState<boolean>(false);

  const layerGroups = useAppSelector(state => state.layerGroups.data);
  const activePreset = useAppSelector(state => state.layerGroups.activePreset);


  const dispatch = useAppDispatch();

  const handleRadioChange = (layerGroupId) => {
    dispatch(activatePreset({ presetId: layerGroupId }));
    setExpanded(layerGroupId);
  }

  return (
    <div className="space-y-1 overflow-hidden overflow-y-auto" style={{ maxHeight: "calc(100vh - 150px)" }}>
      {layerGroups.map((layerGroup, i) =>
        <Expandable
          key={layerGroup.id}
          label={layerGroup.label}
          onExpandChange={() => setExpanded(expanded === layerGroup.id ? null : layerGroup.id)}
          expanded={expanded === layerGroup.id}
          radioButtonProps={{
            name: `expandable-${layerGroup.id}`,
            value: layerGroup.id,
            checked: activePreset === layerGroup.id,
            onChange: () => handleRadioChange(layerGroup.id)
          }}
          content={<>
            <CheckboxGroup layerGroup={layerGroup} />

            <div className="flex items-end justify-end">
              <div className="inline-block mt-2 -mb-2 -mr-2">
                <Button
                  theme="info"
                  size="small"

                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Info
                </Button>

                <Modal
                  title={layerGroup.label}
                  size="wide"
                  open={modal}
                  onDismiss={() => setModal(false)}
                >
                  <div className='p-10 space-y-10 overflow-auto md:flex md:space-x-10 md:space-y-0'>
                    <div className='w-full'>
                      <h2 className='mb-10 text-xl text-white font-bolder'>{layerGroup.label}</h2>

                      <div className='space-y-5 text-mainblue'>
                        <p>Satellite SAR is a form of imagery where pulses of radar are used to create images of the Earth surface. The images are unaffected by clouds and work equally well during day and night. Imaging radar is similar to a photograph taken by a camera, but the image is of radar waves, not visible light.</p>
                        <p>Sea ice typically reflects more of the radar energy emitted by the sensor than the surrounding ocean, which makes it easy to distinguish between the two. But the amount and character of reflected energy are functions of the physical properties of the sea ice, which can be quite complex; thus, it can be difficult to interpret radar images of sea ice. In the past the Antarctic was extensively imaged using the ENVISAT ASAR instrument. More recently we have provided access to Radarsat2 and Cosmo-Skymed SAR imagery. In the very near future we will provide rapid access to imagery from the new European Sentinel-1 satellite.</p>
                      </div>
                    </div>

                    <div className='w-full'>
                      <img
                        className='p-4 border border-dotted border-mainblue'
                        src="/images/ice.png"
                      />
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </>}
          activeLayersNumber={layerGroup.layers.filter(l => l.checked).length || null}
          first={i === 0}
          last={i === layerGroups.length - 1}
        />
      )}
    </div>
  );
};

export default SidebarEditView;
