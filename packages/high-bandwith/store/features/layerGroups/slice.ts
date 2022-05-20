import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import presets from 'constants/presets.json';

// Define a type for the slice state
interface Group {
  label: string;
  id: string;
}

interface GroupedLayer {
  id: string;
  checked: boolean;
  label: string;
  layers: Layer[];
  groups: Group[];
  type: 'grouped-dropdown';
}

interface Layer {
  id: string;
  checked: boolean;
  label: string;
  type: 'checkbox' | 'dropdown' | 'grouped-dropdown-selection';
  group?: string;
  color?:  'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'none' | 'purple' | 'green';
  download?: `https://${string}`;
}

interface LayerGroup {
  id: string;
  label: string;
  layers: (Layer | GroupedLayer)[];
  selected: boolean; // Used for presets
  checked?: boolean; // Used only for grouped-dropdown layer groups
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
      "label": "Ice products", "id": "ice-products", "selected": false,
      "layers": [
        {
          "id": "ice-products",
          "label": "Ice Products",
          "groups": [{ "label": "Russian Antarctic", "id": 'russian-antartic' }, { "label": "US NIC Antarctic Ice Charts", "id": 'us-nic-antarctic' } ],
          "checked": false,
          "type": "grouped-dropdown",
          "layers": [
            { "id": "sea-ice-concentration", "group": "russian-antartic", "label": "Sea Ice Concentration", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/ICE.AQ/aari_antice_20220224_ct.png" },
            { "id": "sea-ice-thickness", "group": "russian-antartic", "label": "Sea Ice Thickness / Stage of Development", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/AARI/blended_arcice_20220301-20220307_sd_90E.png" },
            { "id": "marginal-ice-zone", "group": "russian-antartic", "label": "Marginal Ice Zone", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/AARI/arctic_miz_20220308.png" },
            { "id": "artic-overview", "group": "russian-antartic", "label": "Arctic Overview", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/AARI/Arctic20220222.gif" },
            { "id": "bering-sea", "group": "russian-antartic", "label": "Bering Sea Ice Chart", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/PLANETA/p124.jpg" },
            { "id": "okhotsk", "group": "russian-antartic", "label": "Sea of Okhotsk", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/PLANETA/p104.jpg" },
            { "id": "caspian-sea", "group": "russian-antartic", "label": "Caspian Sea", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/PLANETA/p68.jpg" },
            { "id": "antarctic-peninusla-east", "group": "us-nic-antarctic", "label": "Antarctic Peninsula 2 Panel - East", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/NATICE/antpeninsula_east.png" },
            { "id": "antarctic-peninusla-west", "group": "us-nic-antarctic", "label": "Antarctic Peninsula 2 Panel - West", "checked": false, "type": "grouped-dropdown-selection", "download": "https://www.bsis-ice.de/IcePortal/NATICE/antpeninsula_west.png" },
          ]
        }
      ]
    },
    {
      "label": "Ice charts", "id": "ice-charts", "selected": false,
      "layers": [
        { "id": "ice-met-norway", "label": "Ice chart (met.no)", "checked": false,  "type": "checkbox", "download": "https://www.polarview.aq/images/23_icechart/current/antarctic_icechart_current.jpg" },
        { "id": "ice-miz", "label": "Ice chart (met.no)", "checked": false,  "type": "checkbox", "download": "https://www.polarview.aq/images/24_NICcharts/antarctic/current/antarctic.jpg" },
        { "id": "ice-concentration", "label": "Sea Ice Concentration (Con)", "checked": false,  "type": "checkbox", "download": "https://usicecenter.gov/current/con_arc_20220304.png" },
        { "id": "ice-stage-of-development", "label": "Stage of Development (SoD)", "checked": false,  "type": "checkbox", "download": "https://usicecenter.gov/current/sod_arc_20220304.png" }
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

export const { setLayerGroupsData, updateLayer, activatePreset, updateGroupLayer } = layerGroupSlice.actions;

export default layerGroupSlice.reducer;
