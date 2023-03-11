import React from "react";
import {
  Navbar as MantineNavbar,
  NavbarProps as MantineNavbarProps,
} from "@mantine/core";
import styled from "styled-components";

export interface NavbarProps extends MantineNavbarProps {
  navbarColor: string;
  wide?: boolean;
}

export function Navbar({ children, navbarColor, wide }: NavbarProps) {
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
