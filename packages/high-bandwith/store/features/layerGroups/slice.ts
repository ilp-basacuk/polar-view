import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Layer {
  id: string,
}

interface LayerGroup {
  name: string,
  type: string,
  layers: Layer[]
}

interface LayerGroupsState {
  data: LayerGroup[];
}

// Define the initial state using that type
const initialState: LayerGroupsState = {
  data: [
    { name: 'Ice charts', type: 'simple-dropdown',
      layers: [
        { id: 'ice-met-norway'},
        { id: 'ice-miz'},
        { id: 'ice-concentration'},
        { id: 'ice-stage-of-development'}
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
  },
});

export const { setLayerGroupsData } = layerGroupSlice.actions;

export default layerGroupSlice.reducer;
