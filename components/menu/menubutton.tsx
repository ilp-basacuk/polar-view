import React from 'react';
import cx from 'classnames';

interface IMenuButtonProps {
  active?: boolean;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, IMenuButtonProps>(
  ({ active }, ref) => {
    const classes = cx({
      'border w-4 h-4 flex flex-col items-center justify-around py-[3px] hover:bg-softerblue': true,
      'border-mainblue bg-softerblue': active,
      'border-transparent': !active,
    });

    return (
      <button className="h-[5px] w-4 mb-2" ref={ref}>
        <div className={classes}>
          <div className="h-0.5 w-0.5 bg-white" />
          <div className="h-0.5 w-0.5 bg-white" />
          <div className="h-0.5 w-0.5 bg-white" />
        </div>
      </button>
    );
  }
);
