import React, { useContext } from "react";
import { getPrimary } from "src/Utils/getColor";
import { ThemeContext } from "../../ThemeContext";
import { getStyledButton } from "./Button.styles";

export interface ButtonProps {
  bg: string;
  color: string;
  children: React.ReactNode;
}

export function Button({ bg, color, children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getPrimary(theme, bg);

  const StyledButton = getStyledButton(buttonColor, color);

  return <StyledButton type="button">{children}</StyledButton>;
}
