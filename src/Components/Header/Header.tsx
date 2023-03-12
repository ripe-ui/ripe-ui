import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { getColor } from "../../Utils/getColor";

import { IconButton } from "../Button/IconButton/IconButton";
import { ThemeContext } from "../ThemeContext";

import { getStyledHeader, HeaderRight, Logo } from "./Header.styles";

export interface HeaderProps {
  bg?: string;
}

export function Header({ bg }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getColor(theme, bg);

  const StyledHeader = getStyledHeader(headerColor);

  return (
    <StyledHeader>
      <Logo>Ripe UI</Logo>
      <HeaderRight>
        <IconButton
          bg={bg}
          icon={<FaGithub />}
          href="https://github.com/ripeplan"
        />
        <IconButton
          bg={bg}
          icon={<FaGithub />}
          href="https://github.com/ripeplan"
        />
      </HeaderRight>
    </StyledHeader>
  );
}

Header.defaultProps = {
  bg: null,
};
