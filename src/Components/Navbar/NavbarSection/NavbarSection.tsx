import React from "react";
import styled from "styled-components";
import { Navbar as MantineNavbar, Center, Stack } from "@mantine/core";

export enum SectionType {
  Main,
  Footer,
  Logo,
}

export interface NavbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  section: SectionType;
}

const MainNavbarSection = styled(MantineNavbar.Section)`
  flex-grow: 1;
  margin-top: 50px;
`;

const FooterNavbarSection = styled(MantineNavbar.Section)`
  margin-bottom: 2px;
`;

export function NavbarSection({ children, section }: NavbarSectionProps) {
  switch (section) {
    case SectionType.Main:
      return (
        <MainNavbarSection>
          <Stack justify="center" spacing={4}>
            {children}
          </Stack>
        </MainNavbarSection>
      );
    case SectionType.Footer:
      return (
        <FooterNavbarSection>
          <Stack justify="center" spacing={4}>
            {children}
          </Stack>
        </FooterNavbarSection>
      );
    case SectionType.Logo:
      return <Center>{children}</Center>;
    default:
      return <div />;
  }
}
