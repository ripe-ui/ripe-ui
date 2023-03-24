import React, { useContext } from "react";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { getPrimary } from "../../Utils/getColor";
import { ButtonSize } from "../Buttons/ButtonSize";
import { IconButton } from "../Buttons/IconButton/IconButton";

import { ThemeContext } from "../ThemeContext";

import {
  ButtonContainer,
  getStyledHeader,
  HeaderContent,
} from "./Header.styles";

export interface HeaderProps {
  bg?: string;
  dividerColor?: string;
  fixed: boolean;
  children: React.ReactNode;
  showMobileMenu: boolean;
  mobileMenuOnClick(): void;
}

export function Header({
  bg,
  children,
  dividerColor,
  fixed,
  showMobileMenu,
  mobileMenuOnClick,
}: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getPrimary(theme, bg);

  const StyledHeader = getStyledHeader(headerColor, dividerColor, fixed);

  return (
    <StyledHeader>
      <HeaderContent>
        {showMobileMenu ? (
          <ButtonContainer>
            <IconButton
              bg={headerColor}
              color="white"
              size={ButtonSize.Medium}
              icon={<MdMenu />}
              onClick={mobileMenuOnClick}
            />
          </ButtonContainer>
        ) : (
          ""
        )}
        {children}
      </HeaderContent>
    </StyledHeader>
  );
}

Header.defaultProps = {
  bg: null,
  dividerColor: "#3a3a3a",
};
