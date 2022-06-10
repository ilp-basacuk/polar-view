import { IconProps } from './types';

const DoubleLeftArrowIcon: React.FC<IconProps> = ({ size = 12, stroke = '#27A2F8' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33329 10.6667L0.666627 6.00008L5.33329 1.33341M10.6666 10.6667L5.99996 6.00008L10.6666 1.33341"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DoubleLeftArrowIcon;
