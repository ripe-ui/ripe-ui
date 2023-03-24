import React, { useContext } from "react";

import { getPrimary } from "../../Utils/getColor";
import { ThemeContext } from "../ThemeContext";
import { getStyledNavbar } from "./Navbar.styles";

export interface NavbarProps {
  bg?: string;
  wide?: boolean;
  transparent?: boolean;
  children: React.ReactNode;
}

export function Navbar({ children, bg, wide, transparent }: NavbarProps) {
  const theme = useContext(ThemeContext);
  const navbarColor = getPrimary(theme, bg);

  const StyledNavbar = getStyledNavbar(navbarColor, wide, transparent);
  return <StyledNavbar className="navbar">{children}</StyledNavbar>;
}

Navbar.defaultProps = {
  wide: false,
  transparent: false,
  bg: null,
};
