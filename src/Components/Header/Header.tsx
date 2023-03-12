import React, { useContext } from "react";
import { getColor } from "../../Utils/getColor";

import { ThemeContext } from "../ThemeContext";

import { getStyledHeader } from "./Header.styles";

export interface HeaderProps {
  bg?: string;
  children: React.ReactNode;
}

export function Header({ bg, children }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getColor(theme, bg);

  const StyledHeader = getStyledHeader(headerColor);

  return <StyledHeader>{children}</StyledHeader>;
}

Header.defaultProps = {
  bg: null,
};
