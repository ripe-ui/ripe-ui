import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as ButtonComponent } from './Button';
import {MdEmail} from "react-icons/all";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonColor: { control: 'color' },
    textColor: { control: 'color' },
  },
  args: {
    buttonColor: 'rgba(243, 220, 81, 1)',
    textColor: 'black',
  }
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
  children: 'Button',
};