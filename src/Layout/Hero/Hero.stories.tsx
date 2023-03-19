import React from "react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/Components";
import { Hero as ContentComponent } from "./Hero";

const meta = {
  title: "Components/Hero",
  component: ContentComponent,
};

export default meta;
type Story = StoryObj<typeof ContentComponent>;

export const Hero: Story = {
  render: (args) => (
    <ContentComponent {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ContentComponent>
  ),
  args: {
    color: "white",
    title: "It's a Hero Component",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris metus, iaculis et ex a, consectetur consectetur elit. Sed molestie consectetur sem, id sollicitudin magna pharetra et. ",
  },
};
