import React from 'react';
import { Navbar as MantineNavbar, Center, Stack } from '@mantine/core';

export enum SectionType {
  Main,
  Footer,
  Logo
}

interface NavbarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  section: SectionType;
}

export function NavbarSection({ children, section }: NavbarSectionProps) {
  switch (section) {
    case SectionType.Main:
      return (
        <MantineNavbar.Section grow mt={50}>
          <Stack justify="center" spacing={4}>
            {children}
          </Stack>
        </MantineNavbar.Section>
      )
    case SectionType.Footer:
      return (
        <MantineNavbar.Section mb={2}>
          <Stack justify="center" spacing={4}>
            {children}
          </Stack>
        </MantineNavbar.Section>
      )
    case SectionType.Logo:
      return (
        <Center>
          {children}
        </Center>
      )
  }
}
