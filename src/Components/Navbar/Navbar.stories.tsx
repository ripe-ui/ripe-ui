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
  argTypes: {
    bg: {
      control: "color",
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
        <NavbarSection section={SectionType.Main} wide={args.wide}>
          <NavbarItem
            active
            wide={args.wide}
            icon={<MdAirlines />}
            label="Item 1"
            bg={args.bg}
          />
          <NavbarItem
            wide={args.wide}
            icon={<MdFace />}
            label="Item 2"
            bg={args.bg}
          />
          <NavbarItem
            wide={args.wide}
            icon={<MdAllInbox />}
            label="Item 3"
            bg={args.bg}
          />
        </NavbarSection>
        <NavbarSection section={SectionType.Footer} wide={args.wide}>
          <NavbarItem
            wide={args.wide}
            icon={<MdEmail />}
            label="Bottom Item"
            bg={args.bg}
          />
        </NavbarSection>
      </NavbarComponent>
    </div>
  ),
  args: {
    bg: "",
  },
};
