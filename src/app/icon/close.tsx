import * as React from 'react';
import { SVGProps } from 'react';
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.227 7.227a.75.75 0 0 1 1.061 0l3.713 3.712 3.712-3.712a.75.75 0 1 1 1.06 1.06L13.061 12l3.712 3.712a.75.75 0 1 1-1.06 1.06L12 13.062l-3.713 3.712a.75.75 0 1 1-1.06-1.06L10.94 12 7.227 8.288a.75.75 0 0 1 0-1.061Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CloseIcon;
