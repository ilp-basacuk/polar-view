import React from 'react';
import ChevronDown from '../icons/chevron-down';
import ChevronUp from '../icons/chevron-up';
import RadioButton, { IRadioButton } from '../forms/radio';

interface IExpandable {
  label: string;
  expanded?: boolean;
  radioButtonProps?: IRadioButton;
  onExpandChange?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  content: any;
}

const Expandable: React.FC<IExpandable> = ({
  label,
  expanded = false,
  onExpandChange,
  radioButtonProps,
  content: Content,
}) => {
  const Icon = expanded ? ChevronUp : ChevronDown;
  return (
    <div>
      <div className="h-8 px-2 bg-navyblue w-full border-l border-r border-mainblue text-tiny text-white flex items-center">
        <span className="radio">
          <RadioButton {...radioButtonProps}></RadioButton>
        </span>
        <span className="flex-1 h-[1px] bg-middleblue mx-2"></span>
        <span className="mr-2">{label}</span>
        <span className="icon cursor-pointer" onClick={onExpandChange}>
          <Icon stroke="white" />
        </span>
      </div>
      {expanded && (
        <div className="content border-l border-r border-mainblue bg-navyblue">{Content}</div>
      )}
    </div>
  );
};

export default Expandable;
