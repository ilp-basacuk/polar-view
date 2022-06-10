export interface ISAR_ImageryState {
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
  CHILINENANTARCTIC: { value: string | string[] };
  ANTARCTICPENINSULA: { value: string | string[] };
}

export interface ISidebarState {
  SAR_IMAGERY: ISAR_ImageryState;
  SEA_ICE: ISeaIceState;
  ICE_CHARTS: IIceChartsState;
}

export enum SIDEBAR_VIEW {
  LEGEND,
  EDIT,
  MINIMIZED,
}

export enum SideBarActionKind {
  SAR_IMAGERY = 'SAR_IMAGERY',
  SEA_ICE = 'SEA_ICE',
  ICE_CHARTS = 'ICE_CHARTS',
}

export interface SideBarAction {
  type: SideBarActionKind;
  payload: ISAR_ImageryState | ISeaIceState | IIceChartsState;
}

export interface SideBarProps {
  className?: string;
}
