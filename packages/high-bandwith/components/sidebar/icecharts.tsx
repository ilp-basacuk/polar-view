import FilterCheck from 'components/filtercheck';
import IceChartCheckBullet from 'components/filtercheck/icechartcheck';
import Select from 'components/forms/select';
import useChangeEffect from 'components/hooks/useChangeState';
import React from 'react';
import type { IIceChartsState } from './types';

enum IceChartsActionsKind {
  CHILINENANTARCTIC = 'CHILINENANTARCTIC',
  ANTARCTICPENINSULA = 'ANTARCTICPENINSULA',
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
  CHILINENANTARCTIC: { value: '' },
  ANTARCTICPENINSULA: { value: '' },
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

  const handleOnChange = (name, selection) => {
    setState({
      type: IceChartsActionsKind[name],
      payload: { value: selection },
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
          <div className="py-1">
            <Select
              id={IceChartsActionsKind.CHILINENANTARCTIC}
              initialSelected="1"
              onChange={(selection) =>
                handleOnChange(IceChartsActionsKind.CHILINENANTARCTIC, selection)
              }
              options={[
                { label: 'CHILINEN ANTARCTIC ICE CHARTS', value: '1' },
                { label: 'CHILINEN ANTARCTIC ICE CHARTS', value: '2' },
              ]}
            />
          </div>

          <div className="py-1">
            <Select
              id={IceChartsActionsKind.ANTARCTICPENINSULA}
              initialSelected="1"
              onChange={(selection) =>
                handleOnChange(IceChartsActionsKind.ANTARCTICPENINSULA, selection)
              }
              options={[
                { label: 'ANTARCTIC PENINSULA - BRANSFIELD', value: '1' },
                { label: 'ANTARCTIC PENINSULA - BRANSFIELD', value: '2' }
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
