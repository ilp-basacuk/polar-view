import { IconProps } from './types';

export default ({ size = 12, stroke = '#27A2F8' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={stroke}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </svg>
);
