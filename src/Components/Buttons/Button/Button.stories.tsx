import React from "react";
import { StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button Component",
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Primary</Button>,
  args: {
    bg: "rgba(243, 220, 81, 1)",
    color: "black",
  },
};
