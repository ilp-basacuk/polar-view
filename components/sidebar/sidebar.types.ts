export interface ISARImageryState {
  SENTINAL2: { checked: boolean };
  RADARSAT2: { checked: boolean };
  COSMO_SKYMED: { checked: boolean };
}

export interface ISeaIceState {
  AMSR2SEAICEEDGE: { checked: boolean };
  DATERANGE: { startDate?: Date; endDate?: Date };
  SLIDERDAY?: Date
}

export interface ISidebarState {
  SARIMAGERY: ISARImageryState;
  SEAICE: ISeaIceState;
}
