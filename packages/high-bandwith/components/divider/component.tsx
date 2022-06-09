import { FC } from 'react';

import type { DividerProps } from './types';

export const Divider: FC<DividerProps> = ({ label }) => (
  <div className="flex items-center mb-2">
    <div className="bg-softerblue h-px flex-1" />
    {label && <div className="text-tiny text-mainblue uppercase font-bolder ml-2">{label}</div>}
  </div>
);

export default Divider;
