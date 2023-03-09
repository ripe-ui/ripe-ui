import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Navbar as NavbarComponent} from './Navbar';
import { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus } from '@tabler/icons-react';
import { NavbarSection, SectionType } from './NavbarSection/NavbarSection';
import { NavbarItem } from './NavbarItem/NavbarItem';
import { MdAirlines, MdAllInbox, MdEmail, MdFace } from 'react-icons/md';
const icons = { IconSwitchHorizontal, IconAlbum, IconBone, IconCactus };

export default {
  title: 'Components/Navbar/Navbar',
  component: NavbarComponent,
  argTypes: {
    navbarColor: { control: 'color' },
    wide: { control: 'boolean' },
  },
  args: {
    navbarColor: 'rgba(243, 220, 81, 1)',
    wide: true,
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a navbar component. It is used to navigate between pages. It is a container for NavbarItems.',
      },
    },
  },
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => (
  <div style={{maxWidth: '300px'}}>
    <NavbarComponent navbarColor={args.navbarColor} wide={args.wide}>
      <NavbarSection section={SectionType.Logo}>
        <div style={{fontSize: '30px'}}>Logo</div>
      </NavbarSection>
      <NavbarSection section={SectionType.Main}>
        <NavbarItem active={true} wide={args.wide} icon={MdAirlines} label="Item 1" color={args.navbarColor} />
        <NavbarItem wide={args.wide} icon={MdFace} label="Item 2" color={args.navbarColor} />
        <NavbarItem wide={args.wide} icon={MdAllInbox} label="Item 3" color={args.navbarColor} />
      </NavbarSection>
      <NavbarSection section={SectionType.Footer}>
        <NavbarItem wide={args.wide} icon={MdEmail} label="Bottom Item" color={args.navbarColor} />
      </NavbarSection>
    </NavbarComponent>
  </div>
);

export const Navbar = Template.bind({});
Navbar.args = {
};
