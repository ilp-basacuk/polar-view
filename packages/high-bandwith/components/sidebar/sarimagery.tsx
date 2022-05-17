import FilterCheck from 'components/filtercheck';
import useChangeEffect from 'components/hooks/useChangeState';
import React from 'react';
import { ISARImageryState } from './sidebar.types';

enum SARImageryActionsKind {
  SENTINAL2 = 'SENTINAL2',
  RADARSAT2 = 'RADARSAT2',
  COSMO_SKYMED = 'COSMO_SKYMED',
}

interface SARImageryAction {
  type: SARImageryActionsKind;
  payload: { checked: boolean };
}

const sarImageryReducer = (state: ISARImageryState, action: SARImageryAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const SARImageryInitialState = {
  SENTINAL2: { checked: false },
  RADARSAT2: { checked: false },
  COSMO_SKYMED: { checked: false },
};

interface SARImageryProps {
  onChange: (payload: ISARImageryState) => void;
}

export const SARImagery: React.FC<SARImageryProps> = ({ onChange }) => {
  const [state, setState] = React.useReducer(sarImageryReducer, SARImageryInitialState);

  useChangeEffect(() => {
    onChange(state);
  }, [state]);

  return (
    <div>
      <FilterCheck
        label="Sentinal-2"
        bullet="yellow"
        checkboxProps={{
          checked: state[SARImageryActionsKind.SENTINAL2].checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({
              type: SARImageryActionsKind.SENTINAL2,
              payload: { checked: event.target.checked },
            });
          },
        }}
      />
      <FilterCheck
        label="Radarsat-2"
        bullet="purple"
        checkboxProps={{
          checked: state[SARImageryActionsKind.RADARSAT2].checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({
              type: SARImageryActionsKind.RADARSAT2,
              payload: { checked: event.target.checked },
            });
          },
        }}
      />
      <FilterCheck
        label="Cosmo SkyMed"
        bullet="green"
        checkboxProps={{
          checked: state[SARImageryActionsKind.COSMO_SKYMED].checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({
              type: SARImageryActionsKind.COSMO_SKYMED,
              payload: { checked: event.target.checked },
            });
          },
        }}
      />
    </div>
  );
};
