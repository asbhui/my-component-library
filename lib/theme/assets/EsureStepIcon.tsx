import { StepIcon, StepIconProps, createSvgIcon } from "@mui/material";
import { FC } from "react";

export const EsureStepIcon: FC<StepIconProps> = (props) => {
  const { completed } = props;
  if (completed) {
    return <StepperTick className="MuiStepIcon-root" />;
  }
  return <StepIcon {...props} />;
};

export const StepperTick = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <g clipPath="url(#a)">
      <circle cx="16" cy="16" r="16" fill="#15AE65" />
      <rect width="24" height="24" x="4" y="4" fill="#15AE65" rx="12" />
      <rect
        width="24"
        height="24"
        x="4"
        y="4"
        stroke="#fff"
        strokeWidth="2"
        rx="12"
      />
      <path
        fill="#fff"
        d="m13.5 19.475-2.887-2.888a.834.834 0 0 0-1.18 1.18l3.36 3.36a1 1 0 0 0 1.414 0l8.705-8.706a.831.831 0 0 0-1.175-1.176l-8.237 8.23Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>,
  "StepperTick"
);
