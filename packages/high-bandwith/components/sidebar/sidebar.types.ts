export interface ISARImageryState {
  SENTINAL2: { checked: boolean };
  RADARSAT2: { checked: boolean };
  COSMO_SKYMED: { checked: boolean };
}

export interface ISeaIceState {
  AMSR2SEAICEEDGE: { checked: boolean };
  DATERANGE: { startDate?: Date; endDate?: Date };
  SLIDERDAY?: Date;
}

export interface IIceChartsState {
  CHILINENANTARCTIC: { value: string | string[] },
  ANTARCTICPENINSULA: { value: string | string[] },
}

export interface ISidebarState {
  SARIMAGERY: ISARImageryState;
  SEAICE: ISeaIceState;
  ICECHARTS: IIceChartsState;
}

export enum SIDEBARVIEW {
  LEGEND,
  LAYERS,
  NONE,
}

export enum SideBarActionKind {
  SARIMAGERY = 'SARIMAGERY',
  SEAICE = 'SEAICE',
  ICECHARTS = 'ICECHARTS',
}

export interface SideBarAction {
  type: SideBarActionKind;
  payload: ISARImageryState | ISeaIceState | IIceChartsState;
}
