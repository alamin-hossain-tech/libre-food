const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentcolor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.905 20.25a10.502 10.502 0 0 1 18.19 0"
    />
  </svg>
);
export default UserIcon;
