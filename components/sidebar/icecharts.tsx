import DateRangePicker from 'components/daterange/component';
import FilterCheck from 'components/filtercheck';
import { useChangeEffect } from 'components/hooks/useChangeState';
import React from 'react';
import { IIceChartsState } from './sidebar.types';
import DaySlider from 'components/dayslider/component';
import addDays from 'date-fns/addDays';
import IceChartCheck from 'components/filtercheck/icechartcheck';

enum IceChartsActionsKind {
  FASTICE = 'FASTICE',
  VERYCLOSEDRIFTICE = 'VERYCLOSEDRIFTICE',
  CLOSEDRIFTICE = 'CLOSEDRIFTICE',
  OPENDRIFTICE = 'OPENDRIFTICE',
  OPENWATER = 'OPENWATER',
}

interface IceChartsAction {
  type: IceChartsActionsKind;
  payload: any;
}

const IceChartsReducer = (state: IIceChartsState, action: IceChartsAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const IceChartsInitialState: IIceChartsState = {
  FASTICE: { checked: false },
  VERYCLOSEDRIFTICE: { checked: false },
  CLOSEDRIFTICE: { checked: false },
  OPENDRIFTICE: { checked: false },
  OPENWATER: { checked: false },
};

interface IceChartsProps {
  onChange: (payload: IIceChartsState) => void;
}

export const IceCharts: React.FC<IceChartsProps> = ({ onChange }) => {
  const [state, setState] = React.useReducer(IceChartsReducer, IceChartsInitialState);

  useChangeEffect(() => {
    onChange(state);
  }, [state]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      type: IceChartsActionsKind[event.target.name],
      payload: { checked: event.target.checked },
    });
  };

  return (
    <div>
      <IceChartCheck
        label="Fast Ice"
        bullet="gray"
        checked={state[IceChartsActionsKind.FASTICE].checked}
        name={IceChartsActionsKind.FASTICE}
        onChange={handleOnChange}
      />
      <IceChartCheck
        label="Very Close Drift Ice: 9/10 - 10/10"
        bullet="red"
        checked={state[IceChartsActionsKind.VERYCLOSEDRIFTICE].checked}
        name={IceChartsActionsKind.VERYCLOSEDRIFTICE}
        onChange={handleOnChange}
      />
      <IceChartCheck
        label="Close Drift Ice: 7/10 - 9/10"
        bullet="orange"
        checked={state[IceChartsActionsKind.CLOSEDRIFTICE].checked}
        name={IceChartsActionsKind.CLOSEDRIFTICE}
        onChange={handleOnChange}
      />
      <IceChartCheck
        label="Open Drift Ice: 1/10 - 4/10 - 2"
        bullet="yellow"
        checked={state[IceChartsActionsKind.OPENDRIFTICE].checked}
        name={IceChartsActionsKind.OPENDRIFTICE}
        onChange={handleOnChange}
      />
      <IceChartCheck
        label="Open Water: 0/10 - 1/10"
        bullet="sky"
        checked={state[IceChartsActionsKind.OPENWATER].checked}
        name={IceChartsActionsKind.OPENWATER}
        onChange={handleOnChange}
      />
    </div>
  );
};
