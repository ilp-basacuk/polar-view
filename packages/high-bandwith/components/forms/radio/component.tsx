import React from 'react';
import type { RadioButtonProps } from './types';

export const RadioButton: React.FC<RadioButtonProps> = ({ name, labelText, ...props }) => (
  <div className="flex items-center">
    <input
      type="radio"
      className="radio opacity-0 absolute h-8 w-8"
      id={name}
      name={name}
      {...props}
    />
    <div className="w-4 h-4 rounded-full border border-dashed border-mainblue flex items-center justify-center">
      <span className="hidden fill-current w-2.5 h-2.5 rounded-full bg-mainblue" />
    </div>
    {labelText && (
      <label htmlFor={name} className="text-white ml-1">
        {labelText}
      </label>
    )}
  </div>
);

export default RadioButton;
