import React from "react";
import { StoryObj } from "@storybook/react";
import { Content as ContentComponent } from "./Content";

const meta = {
  title: "Components/Content",
  component: ContentComponent,
};

export default meta;
type Story = StoryObj<typeof ContentComponent>;

export const Content: Story = {
  render: (args) => <ContentComponent {...args}>Test</ContentComponent>,
  args: {
    fixed: false,
  },
};

export const HeaderContent: Story = {
  render: (args) => <ContentComponent {...args}>Test</ContentComponent>,
  args: {
    fixed: true,
  },
};
