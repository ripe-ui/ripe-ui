import React from "react";
import { StoryObj } from "@storybook/react";
import { MdAllInbox } from "react-icons/md";
import { NavbarItem } from "../NavbarItem/NavbarItem";

import {
  NavbarSection as NavbarSectionComponent,
  SectionType,
} from "./NavbarSection";

const meta = {
  title: "Components/Navbar/NavbarSection",
  tags: ["autodocs"],
  component: NavbarSectionComponent,
  parameters: {
    docs: {
      description: {
        component: "Navbar Section Component",
      },
    },
  },
  argTypes: {
    section: {
      options: [0, 1, 2],
      mapping: [SectionType.Logo, SectionType.Main, SectionType.Footer],
      control: {
        type: "select",
        labels: ["Logo", "Main", "Footer"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarSectionComponent>;

export const NavbarSection: Story = {
  render: (args) => (
    <NavbarSectionComponent {...args}>
      {args.section === SectionType.Logo ? (
        <div>Logo</div>
      ) : (
        <>
          <NavbarItem
            wide={false}
            icon={MdAllInbox}
            label="Item 3"
            bg="rgba(243, 220, 81, 1)"
          />
          <NavbarItem
            wide={false}
            icon={MdAllInbox}
            label="Item 4"
            bg="rgba(243, 220, 81, 1)"
          />
        </>
      )}
    </NavbarSectionComponent>
  ),
  args: {
    section: SectionType.Footer,
  },
};
