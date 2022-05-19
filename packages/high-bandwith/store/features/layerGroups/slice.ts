import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import presets from 'constants/presets.json';

// Define a type for the slice state
interface Layer {
  id: string;
  checked: boolean;
  label: string;
  color?:  'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'none' | 'purple' | 'green';
  type: 'checkbox' | 'dropdown' | 'double-dropdown';
}

interface LayerGroup {
  id: string;
  label: string;
  selected: boolean;
  layers: Layer[];
}

interface LayerGroupsState {
  data: LayerGroup[];
  activePreset: string;
}

// Define the initial state using that type
const initialState: LayerGroupsState = {
  data: [
    {
      "label": "SAR Imagery", "id": "sar-imagery", "selected": false,
      "layers": [
        { "id": "sar-subset", "label": "SAR Subset", "checked": false, "type": "checkbox" }
      ]
    },
    {
      "label": "Ice charts", "id": "ice-charts", "selected": false,
      "layers": [
        { "id": "ice-met-norway", "label": "Ice chart (met.no)", "checked": false, "type": "checkbox" },
        { "id": "ice-miz", "label": "Ice chart (met.no)", "checked": false, "type": "checkbox" }
      ]
    }
  ],
  activePreset: null,
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
      const { layerGroupId, layer } = action.payload;
      const updatedData = state.data.map(existingLayerGroup => existingLayerGroup.id === layerGroupId ?
        {
          ...existingLayerGroup,
          layers: existingLayerGroup.layers.map(existingLayer => existingLayer.id === layer.id ? layer : existingLayer)
        } : existingLayerGroup
      );

      return {
        ...state,
        data: updatedData,
        activePreset: null, // Deselect the preset whenever any other layers are selected or deselected
      }
    },
    activatePreset: (state, action: PayloadAction<{ presetId: string }>) => {
      const { presetId } = action.payload;
      const selectedPreset = presets[presetId];
      const updatedData = state.data.map(layerGroup => (
        {
          ...layerGroup,
          layers: layerGroup.layers.map(layer => (
            {
              ...layer,
              checked: selectedPreset[layerGroup.id]?.includes(layer.id) ? true : false
            }
          ))
        }
      ));

      return {
        ...state,
        data: updatedData,
        activePreset: presetId,
      }
    },
  },
});

export const { setLayerGroupsData, updateLayer, activatePreset } = layerGroupSlice.actions;

export default layerGroupSlice.reducer;
