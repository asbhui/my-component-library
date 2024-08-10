import { createSvgIcon } from '@mui/material';

const CheckboxUncheckedIcon = createSvgIcon(
  <g>
    <path d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z" fill="white" />
    <path
      clipRule="evenodd"
      d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6Z"
      fill="black"
      fillOpacity="0.92"
      fillRule="evenodd"
    />
  </g>,
  'CheckboxUnchecked'
);

export default CheckboxUncheckedIcon;
