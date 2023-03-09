import React from 'react';
import { Navbar as MantineNavbar, NavbarProps as MantineNavbarProps } from '@mantine/core';

interface NavBarProps extends MantineNavbarProps {
  navbarColor: string;
  wide?: boolean;
}

export function Navbar({children, navbarColor, wide}: NavBarProps) {
  return (
    <MantineNavbar
      height={750}
      width={{ base: wide ? '100%' : 80 }}
      p="md"
      withBorder={false}
      sx={(theme) => ({
        backgroundColor: navbarColor,
      })}>
      {children}
    </MantineNavbar>
  );
}