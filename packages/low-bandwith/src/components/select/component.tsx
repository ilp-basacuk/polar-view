import { FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';

interface SelectProps {
  options: {
    label: string;
    value: string;
  }[];
  selected: string;
  onChange: (value: string) => void;
}

const Select: FunctionalComponent<SelectProps> = ({
  options = [],
  selected,
  onChange,
}: SelectProps) => {
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
    <div className='relative inline'>
      <span className='inline py-0 text-5xl bg-transparent border-0 border-b border-mainblue'>{SELECTION?.label || '...'}</span>
      <select
        className='absolute top-0 left-0 w-full h-full opacity-0 appearance-none'
        value={selection}
        onChange={handleChange}
      >
        <option disabled value="">Select ...</option>

        {options.map((option) => (
          <option className='text-base' value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}


export default Select;
