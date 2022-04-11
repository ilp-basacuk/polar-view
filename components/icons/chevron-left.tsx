import { IconProps } from './types';

export default ({ size = 12, stroke = '#27A2F8' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M9.75 4.5L6.25 8L9.75 11.5" stroke={stroke}/>
  </svg>
);
