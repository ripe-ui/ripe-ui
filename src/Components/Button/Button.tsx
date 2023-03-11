import React from "react";
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import styled from "styled-components";

export interface ButtonProps extends MantineButtonProps {
  buttonColor: string;
  textColor: string;
}

export function Button({ buttonColor, textColor, children }: ButtonProps) {
  const StyledButton = styled(MantineButton)`
    background-color: ${buttonColor};
    color: ${textColor};
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
