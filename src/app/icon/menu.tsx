import * as React from "react"
import { SVGProps } from "react"
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.25 6A.75.75 0 0 1 4 5.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 6Zm0 6a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75ZM4 17.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5H4Z"
      clipRule="evenodd"
    />
  </svg>
)
export default MenuIcon
