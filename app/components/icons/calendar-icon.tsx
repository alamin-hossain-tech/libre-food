import { SVGProps } from "react";
const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#195A00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 3.75h-15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75ZM16.5 2.25v3M7.5 2.25v3M3.75 8.25h16.5"
    />
    <path
      stroke="#195A00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.625 12h2.625l-1.5 1.875a1.5 1.5 0 1 1-1.06 2.561M13.5 13.125 15 12v4.875"
    />
  </svg>
);
export default CalendarIcon;
