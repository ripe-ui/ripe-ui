import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {NavbarItem as NavbarItemComponent} from './NavbarItem';
import { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus } from '@tabler/icons-react';
const icons = { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus };

export default {
  title: 'Components/Navbar/NavbarItem',
  component: NavbarItemComponent,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
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
} as ComponentMeta<typeof NavbarItemComponent>;

const Template: ComponentStory<typeof NavbarItemComponent> = (args) => (<NavbarItemComponent {...args} />);

export const NavbarItem = Template.bind({});
NavbarItem.args = {
};
