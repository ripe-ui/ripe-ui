import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavbarItem from './NavbarItem';
import {MdEmail} from "react-icons/all";
import { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus } from '@tabler/icons-react';

const icons = { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus };


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navbar/NavbarItem',
  component: NavbarItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          IconSwitchHorizontal: 'Sample Icon 1',
          IconAlbum: 'Sample Icon 2',
          IconBone: 'Sample Icon 3',
          IconCactus: 'Sample Icon 4',
        },
      },
    },
    label: { control: 'text' },
    color: { control: 'color' },
    wide: { control: 'boolean' },
    active: { control: 'boolean'}
  },
  args: {
    icon: IconSwitchHorizontal,
    label: 'Change project',
    color: 'rgba(243, 220, 81, 1)',
    wide: false, 
    active: false
  }
} as ComponentMeta<typeof NavbarItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavbarItem> = (args) => (<NavbarItem {...args} />);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
