import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state

interface Layer {
  id: string;
  checked: boolean;
  label: string;
  color:  'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'none' | 'purple' | 'green';
}

interface LayerGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'dropdown' | 'double-dropdown';
  layers: Layer[];
}

interface LayerGroupsState {
  data: LayerGroup[];
}

// Define the initial state using that type
const initialState: LayerGroupsState = {
  data: [
    { label: 'Ice charts', id: 'ice-charts', type: 'checkbox',
      layers: [
        { id: 'ice-met-norway', checked: false, label: 'Ice chart (met.no)', color: 'yellow' },
        { id: 'ice-miz', checked: false, label: 'Ice chart (NIC, MIZ)', color: 'purple' },
        { id: 'ice-concentration', checked: false, label: 'Ice chart (NIC, Con)', color: 'green'},
        { id: 'ice-stage-of-development', checked: false, label: 'Ice chart (NIC, SoD)', color: 'sky'}
      ]
    }
  ],
};

export const layerGroupSlice = createSlice({
  name: 'layerGroups',
  initialState,
  reducers: {
    setLayerGroupsData: (state, action: PayloadAction<LayerGroup[]>) => ({
      ...state,
      data: action.payload,
    }),
    updateLayer: (state, action: PayloadAction<{ layerGroupId: string, layer: Layer }>) => {
      console.log(action)
      const { layerGroupId, layer } = action.payload;
      const updatedData = state.data.map(existingLayerGroup => existingLayerGroup.id === layerGroupId ?
        {
          ...existingLayerGroup,
          layers: existingLayerGroup.layers.map(existingLayer => existingLayer.id === layer.id ? layer : existingLayer)
        } : existingLayerGroup
      );

      return {
        ...state,
        data: updatedData
      }
    },
  },
});

export const { setLayerGroupsData, updateLayer } = layerGroupSlice.actions;

export default layerGroupSlice.reducer;
