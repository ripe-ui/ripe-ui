import React, { useContext } from "react";
import { getColor } from "src/Utils/getColor";
import { ThemeContext } from "../ThemeContext";
import { getStyledButton } from "./Button.styles";

export interface ButtonProps {
  bg: string;
  color: string;
  children: React.ReactNode;
}

export function Button({ bg, color, children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getColor(theme, bg);

  const StyledButton = getStyledButton(buttonColor, color);

  return <StyledButton type="button">{children}</StyledButton>;
}
