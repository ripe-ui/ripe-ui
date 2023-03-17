import React from "react";
import { StoryObj } from "@storybook/react";

import { FaGithubSquare } from "react-icons/fa";
import { IconButton } from "./IconButton";

const meta = {
  title: "Components/Button/IconButton",
  tags: ["autodocs"],
  component: IconButton,
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
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    bg: "rgba(243, 220, 81, 1)",
    color: "black",
    icon: <FaGithubSquare />,
  },
};
