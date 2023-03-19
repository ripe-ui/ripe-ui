import React, { useEffect, useState } from "react";
import { StoryObj } from "@storybook/react";

import { List as InputComponent, ListItem } from "./List";

const meta = {
  title: "Components/List",
  component: InputComponent,
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
type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  render: (args) => (
    <InputComponent
      {...args}
      items={[
        { name: "Item 1", value: "" },
        { name: "Item 2", value: "" },
      ]}
    />
  ),
  args: {
    itemClicked: (item: ListItem) => {
      alert(item.name);
    },
  },
};
