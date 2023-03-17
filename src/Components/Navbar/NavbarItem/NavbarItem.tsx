import React, { ReactNode, useContext } from "react";
// import { rem, Tooltip } from "@mantine/core";
// import styled from "styled-components";
import { Provider, Root } from "@radix-ui/react-tooltip";
import { ThemeContext } from "../../ThemeContext";
import { getPrimary } from "../../../Utils/getColor";
import {
  getStyledButton,
  IconWrapper,
  TextWrapper,
  TooltipContent,
  TooltipTrigger,
} from "./NavbarItem.styles";

export interface NavbarItemProps {
  icon?: ReactNode;
  label: string;
  bg?: string;
  active?: boolean;
  wide?: boolean;
  transparent?: boolean;
  onClick?(): void;
}

export function NavbarItem({
  icon,
  bg,
  label,
  active,
  wide,
  transparent,
  onClick,
}: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getPrimary(theme, bg);

  const StyledButton = getStyledButton(buttonColor, wide, active, transparent);

  return wide ? (
    <StyledButton type="button" onClick={onClick}>
      {icon ?? <IconWrapper>{icon}</IconWrapper>}
      <TextWrapper>{label}</TextWrapper>
    </StyledButton>
  ) : (
    <Provider delayDuration={0}>
      <Root>
        <TooltipTrigger>
          <StyledButton type="button" onClick={onClick}>
            {icon ?? icon}
          </StyledButton>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Root>
    </Provider>
  );
}

NavbarItem.defaultProps = {
  icon: <div />,
  bg: null,
  active: false,
  wide: false,
  transparent: false,
  onClick: () => {},
};
