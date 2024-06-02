import { SVGProps } from "react";
const StarRatingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentcolor"
      d="m10.344 14.899 3.937 2.5c.508.32 1.133-.157.985-.743l-1.141-4.484a.68.68 0 0 1 .227-.688l3.53-2.945c.462-.383.227-1.156-.374-1.195l-4.61-.297a.648.648 0 0 1-.57-.422L10.61 2.297a.649.649 0 0 0-1.218 0L7.67 6.625a.648.648 0 0 1-.57.422l-4.609.297c-.601.039-.836.812-.375 1.195l3.531 2.945a.68.68 0 0 1 .227.688L4.82 16.328c-.18.703.57 1.274 1.172.89l3.664-2.32a.64.64 0 0 1 .688 0Z"
    />
  </svg>
);
export default StarRatingIcon;
