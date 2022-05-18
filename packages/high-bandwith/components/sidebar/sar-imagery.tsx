import FilterCheck from 'components/filtercheck';
import useChangeEffect from 'components/hooks/useChangeState';
import { FC, useReducer, ChangeEvent } from 'react';
import { ISAR_ImageryState } from './types.d';

enum SARImageryActionsKind {
  SENTINAL2 = 'SENTINAL2',
  RADARSAT2 = 'RADARSAT2',
  COSMO_SKYMED = 'COSMO_SKYMED',
}

interface SARImageryAction {
  type: SARImageryActionsKind;
  payload: { checked: boolean };
}

const sarImageryReducer = (state: ISAR_ImageryState, action: SARImageryAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const SARImageryInitialState = {
  SENTINAL2: { checked: false },
  RADARSAT2: { checked: false },
  COSMO_SKYMED: { checked: false },
};

interface SARImageryProps {
  onChange: (payload: ISAR_ImageryState) => void;
}

export const SARImagery: FC<SARImageryProps> = ({ onChange }) => {
  const [state, setState] = useReducer(sarImageryReducer, SARImageryInitialState);

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
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
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
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
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
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
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
