import React, { useContext } from "react";
import { rem, Tooltip, UnstyledButton } from "@mantine/core";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext";
import { getColor } from "../../../Utils/getColor";

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

  const StyledButton = styled(UnstyledButton)<{
    children: any;
    onClick?(): void;
  }>`
    width: ${wide ? "100%" : "50px"} !important;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: "center";
    justify-content: "center";
    color: "black";
    opacity: 0.85;
    margin: auto;
    background-color: ${buttonColor};

    filter: ${active ? "brightness(85%)" : ""};

    svg {
      display: flex;
      width: 20px;
      height: 20px;
      margin: auto;
    }

    &:hover {
      background-color: ${buttonColor};
      filter: brightness(85%);
    }
  `;

  const TextWrapper = styled.div`
    flex-grow: 1;
    margin: auto;
  `;

  const IconWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin: auto;

    svg {
      display: flex;
      width: 20px;
      height: 20px;
      margin: auto;
    }
  `;

  return wide ? (
    <StyledButton onClick={onClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TextWrapper>{label}</TextWrapper>
    </StyledButton>
  ) : (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
      radius={rem(8)}
    >
      <StyledButton onClick={onClick}>
        <Icon />
      </StyledButton>
    </Tooltip>
  );
}

NavbarItem.defaultProps = {
  bg: null,
  active: false,
  wide: false,
  onClick: () => {},
};
