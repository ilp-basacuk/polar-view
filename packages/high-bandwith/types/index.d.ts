/**
 * This is an example of a type/interface that's used in more than just
 * one place throughout the app.
 */
export interface TypeExample {
  id: string;
  anyProperty: number;
}

export interface Group {
  label: string;
  id: string;
}

export type Color = 'red' | 'orange' | 'yellow' | 'sky' | 'gray' | 'purple' | 'green' | `#${string}`;

export interface Layer {
  id: string;
  checked: boolean;
  label: string;
  type: 'checkbox' | 'dropdown' | 'grouped-dropdown' | 'grouped-dropdown-selection';
  group?: string;
  color?:  Color;
  params?: {[key: string] : any }
  downloadURL?: `https://${string}`;
  hasImages?: boolean; // This is just for the MVP, we should find another way to check if the layers can be downloaded
}

export interface SingleLayer extends Layer {
  type: 'checkbox' | 'dropdown' | 'grouped-dropdown-selection';
}

export interface GroupedLayer extends Layer {
  layers: SingleLayer[];
  groups: Group[];
  type: 'grouped-dropdown';
}

export interface LayerGroup {
  id: string;
  label: string;
  layers: Layer[];
  selected: boolean; // Used for presets
  checked?: boolean; // Used only for grouped-dropdown layer groups
}
