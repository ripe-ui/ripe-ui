import React, { useContext } from "react";

import { getColor } from "../../Utils/getColor";
import { ThemeContext } from "../ThemeContext";
import { getStyledNavbar } from "./Navbar.styles";

export interface NavbarProps {
  bg: string;
  wide?: boolean;
  children: React.ReactNode;
}

export function Navbar({ children, bg, wide }: NavbarProps) {
  const theme = useContext(ThemeContext);
  const navbarColor = getColor(theme, bg);

  const StyledNavbar = getStyledNavbar(navbarColor, wide);
  return <StyledNavbar>{children}</StyledNavbar>;
}

Navbar.defaultProps = {
  wide: false,
};
