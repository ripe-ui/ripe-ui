import React, { useContext } from "react";
import { getPrimary } from "../../Utils/getColor";

import { ThemeContext } from "../ThemeContext";

import { getStyledHeader, HeaderContent } from "./Header.styles";

export interface HeaderProps {
  bg?: string;
  children: React.ReactNode;
}

export function Header({ bg, children }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getPrimary(theme, bg);

  const StyledHeader = getStyledHeader(headerColor);

  return (
    <StyledHeader>
      <HeaderContent>{children}</HeaderContent>
    </StyledHeader>
  );
}

Header.defaultProps = {
  bg: null,
};
