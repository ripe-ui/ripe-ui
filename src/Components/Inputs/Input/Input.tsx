import React, { useContext } from "react";
import { getBg, getPrimary, getShade, getTextColor } from "src/Utils/getColor";
import { ThemeContext } from "../../ThemeContext";
import { InputSize } from "../InputSize";
import { getStyledInput } from "./Input.styles";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  bg?: string;
  color?: string;
  outline?: string;
  size?: InputSize;
}

export function Input({ bg, color, outline, placeholder, size }: InputProps) {
  const theme = useContext(ThemeContext);
  let buttonColor = getBg(theme, bg);
  const textColor = getTextColor(theme, color);
  const outlineColor = getPrimary(theme, outline);
  buttonColor = getShade(buttonColor, -20);
  console.log(size);

  const StyledInput = getStyledInput(
    buttonColor,
    outlineColor,
    textColor,
    size
  );

  return <StyledInput placeholder={placeholder} />;
}

Input.defaultProps = {
  bg: null,
  color: null,
  outline: null,
  size: InputSize.Small,
};
