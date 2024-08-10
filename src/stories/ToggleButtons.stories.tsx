import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box } from "@mui/material";
import {
  SelectionToggle,
  SelectionToggleProps,
} from "../../lib/components/SelectionToggle/SelectionToggle";

const meta: Meta<typeof SelectionToggle> = {
  title: "Components/SelectionToggle",
  component: SelectionToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SelectionToggle>;

const RenderToggleButtons = (props: SelectionToggleProps) => {
  const [selection, setSelection] = useState(props.selection);
  const optionArgs = props.options.map((option) => ({
    ...option,
    onClick: () => {
      setSelection(option.value as string);
    },
  }));
  return <SelectionToggle selection={selection} options={optionArgs} />;
};
RenderToggleButtons.displayName = "SelectionToggle";

export const PaymentAmount: Story = {
  render: ({ ...args }) => <RenderToggleButtons {...args} />,
  args: {
    selection: "option1",
    options: [
      {
        label: "£84.27/mo",
        value: "option1",
        onClick: () => {
          //no ops
        },
      },
      {
        label: "£991.72/yr",
        value: "option2",
        onClick: () => {
          //no ops
        },
      },
    ],
  },
};

export const PaymentType: Story = {
  render: ({ ...args }) => <RenderToggleButtons {...args} />,
  args: {
    selection: "option1",
    options: [
      {
        label: "Pay monthly",
        value: "option1",
        onClick: () => {
          //no ops
        },
      },
      {
        label: "Pay annually",
        value: "option2",
        onClick: () => {
          //no ops
        },
      },
    ],
  },
};
