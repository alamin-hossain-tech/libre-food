import * as React from "react";
import { SVGProps } from "react";
const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.711 13.5-3.71 3v-12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v8.25a.75.75 0 0 1-.75.75H6.71Z"
    />
    <path
      stroke="#195A00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 13.5v3.75a.75.75 0 0 0 .75.75h9.04L21 21V9a.75.75 0 0 0-.75-.75H16.5"
    />
  </svg>
);
export default MessageIcon;
