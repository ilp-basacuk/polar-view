import DateRangePicker from 'components/daterange/component';
import DaySlider from 'components/dayslider/component';
import FilterCheck from 'components/filtercheck';
import useChangeEffect from 'components/hooks/useChangeState';
import addDays from 'date-fns/addDays';
import React from 'react';
import { ISeaIceState } from './sidebar.types';

enum SeaIceActionsKind {
  AMSR2SEAICEEDGE = 'AMSR2SEAICEEDGE',
  DATERANGE = 'DATERANGE',
  SLIDERDAY = 'SLIDERDAY',
}

interface SeaIceAction {
  type: SeaIceActionsKind;
  payload: any;
}

const SeaIceReducer = (state: ISeaIceState, action: SeaIceAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const SeaIceInitialState: ISeaIceState = {
  AMSR2SEAICEEDGE: { checked: false },
  DATERANGE: { startDate: null, endDate: null },
  SLIDERDAY: null,
};

interface SeaIceProps {
  onChange: (payload: ISeaIceState) => void;
}

export const SeaIce: React.FC<SeaIceProps> = ({ onChange }) => {
  const [state, setState] = React.useReducer(SeaIceReducer, SeaIceInitialState);
  const [showIceMap, setShowIceMap] = React.useState(true);

  useChangeEffect(() => {
    onChange(state);
  }, [state]);

  return (
    <div>
      <FilterCheck
        label="AMSR2 Sea ice edge (15%)"
        bullet="gray"
        checkboxProps={{
          checked: state[SeaIceActionsKind.AMSR2SEAICEEDGE].checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setState({
              type: SeaIceActionsKind.AMSR2SEAICEEDGE,
              payload: { checked: event.target.checked },
            });
          },
        }}
      />
      <FilterCheck
        label="AMSR2 Sea ice map"
        checkboxProps={{
          checked: showIceMap,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setShowIceMap(event.target.checked);
          },
        }}
      />
      {showIceMap && (
        <div className="mb-3">
          <div className="text-white text-tiny mb-3 py-1">
            <div className="sea-ice-map-gradiant h-2" />
            <div className="flex justify-between mt-2.5">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
          <div className="mb-3">
            <DateRangePicker
              startDate={state.DATERANGE.startDate}
              endDate={state.DATERANGE.endDate}
              startPlaceHolder="Start Date"
              endPlaceHolder="End Date"
              onChange={(startDate, endDate) => {
                if (startDate && endDate) {
                  setState({ type: SeaIceActionsKind.DATERANGE, payload: { startDate, endDate } });
                }
              }}
            />
          </div>
          <DaySlider
            startDate={addDays(new Date(), -30)}
            onChange={(date) => setState({ type: SeaIceActionsKind.SLIDERDAY, payload: date })}
          />
        </div>
      )}
    </div>
  );
};
