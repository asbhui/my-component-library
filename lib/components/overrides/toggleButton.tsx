import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps,
} from "@mui/material";

import { forwardRef } from "react";

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ ...newProps }, ref) => {
    return <MuiToggleButton {...newProps} ref={ref} />;
  }
);

ToggleButton.displayName = "ToggleButton";
