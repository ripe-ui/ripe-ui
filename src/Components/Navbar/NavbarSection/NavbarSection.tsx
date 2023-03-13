import React from "react";
import {
  getFooterNavbarSection,
  getMainNavbarSection,
  Stack,
  LogoNavbarCenter,
  LogoNavbar,
} from "./NavbarSection.styles";

export enum SectionType {
  Main,
  Footer,
  LogoCenter,
  Logo,
}

export interface NavbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  section: SectionType;
  wide?: boolean;
  label?: string;
  transparent?: boolean;
}

export function NavbarSection({
  children,
  section,
  wide,
  transparent,
  label,
}: NavbarSectionProps) {
  const MainNavbarSection = getMainNavbarSection(wide, transparent);
  const FooterNavbarSection = getFooterNavbarSection(wide);
  switch (section) {
    case SectionType.Main:
      return (
        <MainNavbarSection>
          {label ? (
            <div style={{ marginLeft: "20px", marginBottom: "8px" }}>
              {label}
            </div>
          ) : (
            ""
          )}
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
      return <LogoNavbar>{children}</LogoNavbar>;
    case SectionType.LogoCenter:
      return <LogoNavbarCenter>{children}</LogoNavbarCenter>;
    default:
      return <div />;
  }
}

NavbarSection.defaultProps = {
  wide: false,
  label: null,
  transparent: false,
};
