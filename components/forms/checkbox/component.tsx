import React from 'react';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, ...props }) => (
  <div className="relative">
    <div className="flex items-center absolute">
      <input
        type="checkbox"
        className="checkbox opacity-0 absolute w-full h-full cursor-pointer"
        name={name}
        {...props}
      />
      <div className="border border-dashed border-mainblue w-4 h-4 flex justify-center items-center">
        <span className="w-2.5 h-2.5 bg-mainblue hidden" />
      </div>
      {label && (
        <label htmlFor={name} className="text-mainblue text-tiny ml-1">
          {label}
        </label>
      )}
    </div>
  </div>
);

export default Checkbox;
