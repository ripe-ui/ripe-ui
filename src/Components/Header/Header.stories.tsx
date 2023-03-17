import React from "react";
import { StoryObj } from "@storybook/react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { Header as HeaderComponent } from "./Header";
import { HeaderRight, Logo } from "./Header.styles";
import { IconButton } from "../Buttons/IconButton/IconButton";
import { ButtonSize } from "../Buttons/ButtonSize";
import { Input } from "../Inputs/Input/Input";

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
  render: (args) => (
    <HeaderComponent {...args}>
      <Logo>Test</Logo>
      <HeaderRight>
        <IconButton size={ButtonSize.Medium} icon={<FaSearch />} />
        <IconButton
          size={ButtonSize.Medium}
          icon={<FaGithub />}
          href="https://github.com"
        />
      </HeaderRight>
    </HeaderComponent>
  ),
  args: {
    bg: "",
  },
};

export const DarkHeader: Story = {
  render: (args) => (
    <HeaderComponent {...args}>
      <Logo style={{ color: "white" }}>Ripe UI</Logo>
      <HeaderRight>
        <Input
          placeholder="Enter to Start Searching"
          color="white"
          style={{ width: "40%" }}
        />
        <IconButton
          bg={args.bg}
          color="white"
          size={ButtonSize.Large}
          icon={<FaGithub />}
          href="https://github.com"
        />
      </HeaderRight>
    </HeaderComponent>
  ),
  args: {
    bg: "color(srgb 0.2007 0.2007 0.2007)",
  },
};
