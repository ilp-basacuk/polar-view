import { FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';

interface SelectProps {
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  selected: string | number;
  onChange: (value: string) => void;
}

const Select: FunctionalComponent<SelectProps> = ({
  options = [],
  selected,
  onChange,
}: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [selection, setSelection] = useState(selected || "");

  const SELECTION = useMemo(() => {
    return options.find(option => option.value === selection);
  }, [selection]);

  const handleChange = (e) => {
    setSelection(e.target.value);
    onChange && onChange(e.target.value);
  }

  // If you pass a value from outside, it will be set as the selection
  useEffect(() => {
    setSelection(selected);
  }, [selected]);

  return (
    <div className='relative inline-block'>
      <span
        className='inline py-0 text-2xl text-white bg-transparent border-0 border-b md:text-5xl border-mainblue'
      >
        {SELECTION?.label || '...'}
      </span>
      <select
        ref={selectRef}
        className='absolute top-0 left-0 w-full h-full opacity-0 appearance-none'
        value={selection}
        onChange={handleChange}
      >
        <option disabled value="">Select ...</option>

        {options.map((option) => (
          <option
            className='text-base'
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}


export default Select;
