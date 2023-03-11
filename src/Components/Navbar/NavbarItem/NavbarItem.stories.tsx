import React from "react";
import { StoryObj } from "@storybook/react";

import { MdAllInbox } from "react-icons/md";
import { NavbarItem as NavbarItemComponent } from "./NavbarItem";

const meta = {
  title: "Components/Navbar/NavbarItem",
  tags: ["autodocs"],
  component: NavbarItemComponent,
  parameters: {
    docs: {
      description: {
        component: "Navbar Item Component",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarItemComponent>;

export const NavbarSection: Story = {
  render: (args) => <NavbarItemComponent {...args} />,
  args: {
    icon: MdAllInbox,
    label: "Item 3",
    color: "rgba(243, 220, 81, 1)",
  },
};
