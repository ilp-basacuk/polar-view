import FilterCheck from 'components/filtercheck';
import IceChartCheckBullet from 'components/filtercheck/icechartcheck';
import Select from 'components/forms/select';
import useChangeEffect from 'components/hooks/useChangeState';
import React from 'react';
import { IIceChartsState } from './sidebar.types';

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
  const [showDetail, setShowDetail] = React.useState(false);
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
      <FilterCheck
        label="Ice charts"
        checkboxProps={{
          checked: showDetail,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setShowDetail(event.target.checked);
          },
        }}
      />

      {showDetail && (
        <div>
          <div className='py-1'>
            <Select
              id="time"
              initialSelected="1"
              onChange={(selection) => {
                console.log(selection);
              }}
              options={[
                { label: 'LAST 24H.', value: '1' },
                { label: 'LAST 72H.', value: '2' },
                { label: 'LAST 7 DAYS.', value: '3' },
                { label: 'LAST 30 DAYS.', value: '4' },
              ]}
            />
          </div>
          <div>
            <IceChartCheckBullet label="Fast Ice" bullet="gray" />
            <IceChartCheckBullet label="Very Close Drift Ice: 9/10 - 10/10" bullet="red" />
            <IceChartCheckBullet label="Close Drift Ice: 7/10 - 9/10" bullet="orange" />
            <IceChartCheckBullet label="Open Drift Ice: 1/10 - 4/10 - 2" bullet="yellow" />
            <IceChartCheckBullet label="Open Water: 0/10 - 1/10" bullet="sky" />
          </div>
        </div>
      )}
    </div>
  );
};
