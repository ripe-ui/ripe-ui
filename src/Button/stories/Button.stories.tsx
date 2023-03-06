import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/Button';
import {MdEmail} from "react-icons/all";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
  leftIcon: <MdEmail />,
  children: 'Email',
};

export const WithLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLoading.args = {
  isLoading: true,
  children: 'Submit',
};
