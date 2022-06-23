import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { LayerGroup, Layer } from 'types';

// Json files should be imported with require:
// https://stackoverflow.com/a/50708719

const layersConfig = require('constants/layers-config.json');
const presets = require('constants/presets.json');

// Define a type for the slice state
interface LayerGroupsState {
  data: LayerGroup[];
  activePreset: string;
}

// Define the initial state using that type
const initialState: LayerGroupsState = {
  data: layersConfig,
  activePreset: null,
};

// Exported only for testing purposes
export const updateLayerReducer = (state, action: PayloadAction<{ layerGroupId: string; layer: Layer }>) => {
  const { layerGroupId, layer } = action.payload;
  const updatedData = state.data.map((existingLayerGroup) =>
    existingLayerGroup.id === layerGroupId
      ? {
          ...existingLayerGroup,
          layers: existingLayerGroup.layers.map((existingLayer) =>
            existingLayer.id === layer.id ? layer : existingLayer,
          ),
        }
      : existingLayerGroup,
  );

  return {
    ...state,
    data: updatedData,
    activePreset: null, // Deselect the preset whenever any other layers are selected or deselected
  };
};

export const layerGroupSlice = createSlice({
  name: 'layerGroups',
  initialState,
  reducers: {
    setLayerGroupsData: (state, action: PayloadAction<LayerGroup[]>) => ({
      ...state,
      data: action.payload,
    }),
    updateLayer: updateLayerReducer,
    activatePreset: (state, action: PayloadAction<{ presetId: string }>) => {
      const { presetId } = action.payload;
      const selectedPreset = presets[presetId];
      const updatedData = state.data.map((layerGroup) => ({
        ...layerGroup,
        layers: layerGroup.layers.map((layer) => ({
          ...layer,
          checked: selectedPreset[layerGroup.id]?.includes(layer.id) ? true : false,
        })),
      }));

      return {
        ...state,
        data: updatedData,
        activePreset: presetId,
      };
    },
  },
});

export const { setLayerGroupsData, updateLayer, activatePreset } = layerGroupSlice.actions;

export default layerGroupSlice.reducer;
