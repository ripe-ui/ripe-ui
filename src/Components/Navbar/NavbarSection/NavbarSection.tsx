import React from "react";
import {
  getFooterNavbarSection,
  LogoNavbarSection,
  getMainNavbarSection,
  Stack,
} from "./NavbarSection.styles";

export enum SectionType {
  Main,
  Footer,
  Logo,
}

export interface NavbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  section: SectionType;
  wide?: boolean;
}

export function NavbarSection({ children, section, wide }: NavbarSectionProps) {
  const MainNavbarSection = getMainNavbarSection(wide);
  const FooterNavbarSection = getFooterNavbarSection(wide);
  switch (section) {
    case SectionType.Main:
      return (
        <MainNavbarSection>
          <Stack>{children}</Stack>
        </MainNavbarSection>
      );
    case SectionType.Footer:
      return (
        <FooterNavbarSection>
          <Stack>{children}</Stack>
        </FooterNavbarSection>
      );
    case SectionType.Logo:
      return <LogoNavbarSection>{children}</LogoNavbarSection>;
    default:
      return <div />;
  }
}

NavbarSection.defaultProps = {
  wide: false,
};
