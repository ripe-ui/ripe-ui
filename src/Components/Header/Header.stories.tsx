import React from "react";
import { StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "./Header";

const meta = {
  title: "Components/Header",
  tags: ["autodocs"],
  component: HeaderComponent,
  parameters: {
    docs: {
      description: {
        component: "Header Component",
      },
    },
  },
  argTypes: {
    bg: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  render: (args) => <HeaderComponent {...args} />,
  args: {
    bg: "",
  },
};
