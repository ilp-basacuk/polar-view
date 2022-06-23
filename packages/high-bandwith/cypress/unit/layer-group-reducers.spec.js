import { updateLayerReducer } from 'store/features/layerGroups/slice';

const layersConfig = [
  {
    label: 'First Group',
    id: 'first-group',
    selected: false,
    layers: [
      {
        id: 'layer-1',
        label: 'Example Layer 1',
        checked: false,
        type: 'checkbox',
        downloadURL: 'https://www.exampledownloadurl.com/1',
      },
    ],
  },
];

describe('Update layer reducer', () => {
  const initialState = {
    data: layersConfig,
    activePreset: null,
  };

  const updatedLayer = {
    id: 'layer-1',
    label: 'Example Layer 1',
    checked: true,
    type: 'checkbox',
    downloadURL: 'https://www.exampledownloadurl.com/1',
  };
  const updatedLayerData = [
    {
      ...layersConfig[0],
      layers: [updatedLayer],
    },
  ];

  const updatedState = {
    data: updatedLayerData,
    activePreset: null,
  };
  const action = { payload: { layerGroupId: 'first-group', layer: updatedLayer } };

  it('should update the layer', () => {
    expect(updateLayerReducer(initialState, action)).to.deep.equal(updatedState);
  });

  it('should clear active preset when we update the layer', () => {
    const initialStateWithActivePreset = {
      data: layersConfig,
      activePreset: 'some-active-preset',
    };

    expect(updateLayerReducer(initialStateWithActivePreset, action)).to.deep.equal(updatedState);
  });
});
