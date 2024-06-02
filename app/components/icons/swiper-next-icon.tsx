import * as React from "react";
import { SVGProps } from "react";
const SwiperNextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"
    />
  </svg>
);
export default SwiperNextIcon;
