import React, { useContext } from "react";
import { Button as MantineButton } from "@mantine/core";
import styled from "styled-components";
import { getColor } from "src/Utils/getColor";
import { ThemeContext } from "../ThemeContext";

export interface ButtonProps {
  bg: string;
  color: string;
  children: React.ReactNode;
}

export function Button({ bg, color, children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getColor(theme, bg);

  const StyledButton = styled(MantineButton)`
    background-color: ${buttonColor};
    color: ${color};
    border: 0;
    border-radius: 8px;
    height: 42px;
    padding-left: 20px;
    padding-right: 20px;
    &:not([data-disabled]):hover {
      filter: brightness(85%);
      background-color: ${buttonColor};
    }
  `;

  return <StyledButton>{children}</StyledButton>;
}
