import { IconProps } from './types';

export default ({ size = 15, stroke = 'currentColor'}: IconProps) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 2h1v4h3l-3.5 4L4 6h3V2Zm-4 8H2v3h11v-3h-1v2H3v-2Z" stroke={stroke} />
  </svg>
);
