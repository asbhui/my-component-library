import {
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  Typography,
} from "@mui/material";
import { ToggleButton } from "../overrides/toggleButton";

interface ToggleOptionsProps extends ToggleButtonProps {
  label: string;
  onClick: () => void;
  trackOverride?: string;
}

export interface SelectionToggleProps extends ToggleButtonGroupProps {
  options: ToggleOptionsProps[];
  selection: string;
}

export const SelectionToggle = ({
  options,
  selection,
  ...newProps
}: SelectionToggleProps) => {
  return (
    <ToggleButtonGroup exclusive size="small" value={selection} {...newProps}>
      {options.map((option) => (
        <ToggleButton
          key={option.label}
          value={option.value as string}
          onClick={() => {
            option.onClick();
          }}
        >
          <Typography variant="h5">{option.label}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

SelectionToggle.displayName = "SelectionToggle";
