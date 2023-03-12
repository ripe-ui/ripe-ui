import React, { useContext } from "react";
// import { rem, Tooltip } from "@mantine/core";
// import styled from "styled-components";
import { Provider, Root } from "@radix-ui/react-tooltip";
import { ThemeContext } from "../../ThemeContext";
import { getColor } from "../../../Utils/getColor";
import {
  getStyledButton,
  IconWrapper,
  TextWrapper,
  TooltipContent,
  TooltipTrigger,
} from "./NavbarItem.styles";

export interface NavbarItemProps {
  icon: React.FC<any>;
  label: string;
  bg?: string;
  active?: boolean;
  wide?: boolean;
  onClick?(): void;
}

export function NavbarItem({
  icon: Icon,
  bg,
  label,
  active,
  wide,
  onClick,
}: NavbarItemProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getColor(theme, bg);

  const StyledButton = getStyledButton(buttonColor, wide, active);

  return wide ? (
    <StyledButton type="button" onClick={onClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TextWrapper>{label}</TextWrapper>
    </StyledButton>
  ) : (
    <Provider delayDuration={0}>
      <Root>
        <TooltipTrigger>
          <StyledButton type="button" onClick={onClick}>
            <Icon />
          </StyledButton>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Root>
    </Provider>
  );
}

NavbarItem.defaultProps = {
  bg: null,
  active: false,
  wide: false,
  onClick: () => {},
};
