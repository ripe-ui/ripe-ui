import React, { useContext } from "react";
import { getPrimary } from "../../Utils/getColor";

import { ThemeContext } from "../ThemeContext";

import { getStyledHeader, HeaderContent } from "./Header.styles";

export interface HeaderProps {
  bg?: string;
  dividerColor?: string;
  fixed: boolean;
  children: React.ReactNode;
}

export function Header({ bg, children, dividerColor, fixed }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getPrimary(theme, bg);

  const StyledHeader = getStyledHeader(headerColor, dividerColor, fixed);

  return (
    <StyledHeader>
      <HeaderContent>{children}</HeaderContent>
    </StyledHeader>
  );
}

Header.defaultProps = {
  bg: null,
  dividerColor: "#3a3a3a",
};
