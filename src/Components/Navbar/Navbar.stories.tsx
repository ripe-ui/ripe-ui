import React from "react";
import { StoryObj } from "@storybook/react";
import { MdAirlines, MdAllInbox, MdEmail, MdFace } from "react-icons/md";
import { Navbar as NavbarComponent } from "./Navbar";
import { NavbarItem } from "./NavbarItem/NavbarItem";
import { NavbarSection, SectionType } from "./NavbarSection/NavbarSection";

const meta = {
  title: "Components/Navbar/Navbar",
  tags: ["autodocs"],
  component: NavbarComponent,
  parameters: {
    docs: {
      description: {
        component: "Navbar Component",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const Navbar: Story = {
  render: (args) => (
    <div style={{ maxWidth: "300px" }}>
      <NavbarComponent {...args}>
        <NavbarSection section={SectionType.Logo}>
          <div style={{ fontSize: "30px" }}>Logo</div>
        </NavbarSection>
        <NavbarSection section={SectionType.Main}>
          <NavbarItem
            active
            wide={args.wide}
            icon={MdAirlines}
            label="Item 1"
            color={args.navbarColor}
          />
          <NavbarItem
            wide={args.wide}
            icon={MdFace}
            label="Item 2"
            color={args.navbarColor}
          />
          <NavbarItem
            wide={args.wide}
            icon={MdAllInbox}
            label="Item 3"
            color={args.navbarColor}
          />
        </NavbarSection>
        <NavbarSection section={SectionType.Footer}>
          <NavbarItem
            wide={args.wide}
            icon={MdEmail}
            label="Bottom Item"
            color={args.navbarColor}
          />
        </NavbarSection>
      </NavbarComponent>
    </div>
  ),
  args: {
    navbarColor: "rgba(243, 220, 81, 1)",
  },
};