import React from "react";
import { StoryObj } from "@storybook/react";
import {
  Navbar,
  NavbarSection,
  SectionType,
  NavbarItem,
  Content,
} from "src/Components";
import { AppContainer as AppContainerComponent } from "./AppContainer";

const meta = {
  title: "Layout/AppContainer",
  component: AppContainerComponent,
};

export default meta;
type Story = StoryObj<typeof AppContainerComponent>;

export const AppContainer: Story = {
  render: (args) => (
    <AppContainerComponent {...args}>
      <Navbar wide transparent>
        <NavbarSection section={SectionType.Logo}>
          <div style={{ fontSize: "25px" }}>Ripe UI</div>
        </NavbarSection>
        <NavbarSection section={SectionType.Main} wide label="Getting Started">
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
        </NavbarSection>
        <NavbarSection section={SectionType.Main} wide label="Components">
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
          <NavbarItem wide transparent label="Item 1" />
        </NavbarSection>
      </Navbar>
      <Content fixed={false}>Hello WOrld</Content>
    </AppContainerComponent>
  ),
  args: { navbarOpen: false },
};
