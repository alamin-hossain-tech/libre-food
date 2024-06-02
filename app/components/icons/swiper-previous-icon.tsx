import * as React from "react";
import { SVGProps } from "react";
const SwiperPreviousIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.25 12H3.75M10.5 18.75 3.75 12l6.75-6.75"
    />
  </svg>
);
export default SwiperPreviousIcon;
