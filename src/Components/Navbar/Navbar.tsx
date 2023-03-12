import React, { useContext } from "react";
import {
  Navbar as MantineNavbar,
  NavbarProps as MantineNavbarProps,
} from "@mantine/core";
import styled from "styled-components";
import { getColor } from "../../Utils/getColor";
import { ThemeContext } from "../ThemeContext";

export interface NavbarProps extends MantineNavbarProps {
  bg: string;
  wide?: boolean;
}

export function Navbar({ children, bg, wide }: NavbarProps) {
  const theme = useContext(ThemeContext);
  const navbarColor = getColor(theme, bg);

  const StyledNavbar = styled(MantineNavbar)`
    background-color: ${navbarColor};
    border: none;
    width: ${wide ? "100%" : "80px"};
    height: 750px;
  `;

  return <StyledNavbar p="md">{children}</StyledNavbar>;
}

Navbar.defaultProps = {
  wide: false,
};
