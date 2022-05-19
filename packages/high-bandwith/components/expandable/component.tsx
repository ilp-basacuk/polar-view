import React from 'react';
import ChevronDown from '../icons/chevron-down';
import ChevronUp from '../icons/chevron-up';
import RadioButton, { IRadioButton } from '../forms/radio';

interface IExpandable {
  label: string;
  expanded?: boolean;
  activeLayersNumber?: number;
  radioButtonProps?: IRadioButton;
  onExpandChange?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  content: React.ReactNode;
  first?: boolean | undefined;
  last?: boolean | undefined;
}

const Expandable: React.FC<IExpandable> = ({
  label,
  expanded = false,
  onExpandChange,
  radioButtonProps,
  content: Content,
  activeLayersNumber,
  first,
}) => {
  const Icon = expanded ? ChevronUp : ChevronDown;
  const firstClasses = first ? 'border-t' : '';
  return (
    <div>
      <div
        className={`h-8 px-3 bg-blur w-full border-l border-r border-mainblue text-tiny text-white flex items-center ${firstClasses}`}
      >
        <span
          className="icon cursor-pointer"
          role="button"
          tabIndex={0}
          aria-hidden
          onClick={onExpandChange}
        >
          <Icon stroke="white" />
        </span>
        <span className="ml-2 uppercase">{label}</span>
        {activeLayersNumber && <span className="ml-1 h-3 w-3 pl-0.5 bg-white text-navyblue text-center rounded-full flex items-center justify-center">{activeLayersNumber}</span>}
        <span className="flex-1 h-[1px] bg-middleblue mx-2" />
        <span className="radio">
          <RadioButton {...radioButtonProps} />
        </span>
      </div>
      {expanded && (
        <div className="content border-l border-r p-2 border-mainblue bg-blur">{Content}</div>
      )}
    </div>
  );
};

export default Expandable;
