import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import presets from 'constants/presets.json';
import layersConfig from 'constants/layersConfig.json';
import type { LayerGroup } from 'types';

// Define a type for the slice state

interface LayerGroupsState {
  data: LayerGroup[];
  activePreset: string;
}

// Define the initial state using that type
// TODO: Fix type
const initialState: LayerGroupsState = {
  // @ts-ignore
  data: layersConfig,
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
    updateLayer: (state, action: PayloadAction<{ layerGroupId: string, layer }>) => {
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
