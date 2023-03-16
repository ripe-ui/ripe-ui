import React from "react";
import { StoryObj } from "@storybook/react";

import { Input as InputComponent } from "./Input";
import { InputSize } from "../InputSize";

const meta = {
  title: "Components/Inputs/Input",
  component: InputComponent,
  parameters: {
    docs: {
      description: {
        component: "Input Component",
      },
    },
  },
  argTypes: {
    bg: {
      control: "color",
    },
    color: {
      control: "color",
    },
    size: {
      options: [0, 1, 2, 3],
      mapping: [
        InputSize.Small,
        InputSize.Medium,
        InputSize.Large,
        InputSize.Full,
      ],
      control: {
        type: "select",
        labels: ["Small", "Medium", "Large", "Full"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  render: (args) => <InputComponent {...args} />,
  args: {
    bg: "",
    color: "#ffffff",
    placeholder: "Type here",
    size: InputSize.Small,
  },
};
