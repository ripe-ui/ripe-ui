import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavbarSection as NavbarSectionComponent, SectionType } from './NavbarSection';
import {NavbarItem} from '../NavbarItem/NavbarItem';
import { MdAllInbox } from 'react-icons/md';

export default {
  title: 'Components/Navbar/NavbarSection',
  component: NavbarSectionComponent,
  argTypes: {
    section: {
      options: [0, 1, 2],
      mapping: [SectionType.Logo, SectionType.Main, SectionType.Footer],
      control: {
        type: 'select',
        labels: ['Logo', 'Main', 'Footer'],
      },
    },
  },
  args: {
    section: SectionType.Footer
  },
} as ComponentMeta<typeof NavbarSectionComponent>;

const Template: ComponentStory<typeof NavbarSectionComponent> = (args) => (
  args.section == SectionType.Logo ?
    <div style={{ fontSize: '30px' }}>Logo</div>
    :
    <NavbarSectionComponent section={args.section}>
      <NavbarItem wide={false} icon={MdAllInbox} label="Item 3" color={'rgba(243, 220, 81, 1)'} />
      <NavbarItem wide={false} icon={MdAllInbox} label="Item 4" color={'rgba(243, 220, 81, 1)'} />
    </NavbarSectionComponent>
);

export const NavbarSection = Template.bind({});
