import { useEffect, useState, FC } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import DatePicker from 'components/datepicker/component';

interface IRangeOption {
  label: string;
  value: number;
}

interface ReactDatePickerComboProps extends Partial<ReactDatePickerProps> {
  disableToday?: boolean;
}

export interface IReactDatePickerComboProps {
  dateProps?: ReactDatePickerComboProps;
  options?: IRangeOption[];
  onChange?: (val: Date | number) => void;
}

const DefaultRangeOptions = [
  { label: 'LAST 24H.', value: -1 },
  { label: 'LAST 72H.', value: -3 },
  { label: 'LAST 7 DAYS', value: -7 },
  { label: 'LAST 30 DAYS.', value: -30 },
];

const DatePickerComboContainer: FC<IReactDatePickerComboProps> = ({ children, options, onChange }) => {
  return (
    <div className="flex border border-mainblue bg-navyblue">
      <div className="text-white text-tiny p-2">
        {options.map((opt) => {
          return (
            <div
              key={opt.label}
              className="hover:bg-softerblue p-1 cursor-pointer"
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </div>
          );
        })}
      </div>
      <div className="p-2 border-l border-mainblue">{children}</div>
    </div>
  );
};

const DatePickerCombo: FC<IReactDatePickerComboProps> = ({
  dateProps = { onChange: () => {} },
  options = DefaultRangeOptions,
  onChange,
}: IReactDatePickerComboProps) => {
  const [value, setValue] = useState<Date | number>();
  const [open, setOpen] = useState(false);
  const valIsNumber = value != undefined && typeof value === 'number';

  const onDateChange = (value: Date | number) => {
    setValue(value);
    setOpen(false);
  };

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  const { startDate, onChange: _onChange, placeholderText, disableToday, ...others } = dateProps;
  const placeholder = valIsNumber ? options.find((m) => m.value == value).label : placeholderText;

  return (
    <DatePicker
      onSelect={(date) => onDateChange(date)}
      open={open}
      onChange={() => {}}
      onInputClick={() => setOpen(true)}
      onCalendarOpen={() => setOpen(true)}
      onCalendarClose={() => setOpen(false)}
      placeholderText={placeholder}
      disableToday={disableToday}
      showValue={!valIsNumber}
      selected={!valIsNumber && value && new Date(value)}
      maxDate={new Date()}
      calendarContainer={(props) => (
        <DatePickerComboContainer {...props} options={options} onChange={onDateChange} />
      )}
      {...others}
    />
  );
};

export default DatePickerCombo;
