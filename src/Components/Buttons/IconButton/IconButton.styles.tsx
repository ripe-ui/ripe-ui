import { styled } from "@stitches/react";
import { ButtonSize } from "../ButtonSize";

function getButtonSize(size: ButtonSize | undefined) {
  switch (size) {
    case ButtonSize.Small:
      return "30px";
    case ButtonSize.Medium:
      return "40px";
    case ButtonSize.Large:
      return "50px";
    default:
      return "20px";
  }
}

const buttonStyle = (
  buttonColor: string,
  color: string | undefined,
  size: ButtonSize | undefined,
  outlineColor: string
) => ({
  all: "unset",
  outline: "none",
  width: getButtonSize(size),
  height: getButtonSize(size),
  border: `solid 2px ${buttonColor}`,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color,
  opacity: 0.85,
  cursor: "pointer",
  backgroundColor: buttonColor,

  "&:hover": {
    backgroundColor: buttonColor,
    filter: "brightness(85%)",
    transition: "all .2s ease-in",
  },
  "&:focus": {
    border: `solid 2px ${outlineColor}`,
    transition: "all .2s ease-in",
  },

  svg: {
    display: "flex",
    width: "20px",
    height: "20px",
    margin: "auto",
    color,
  },
});

export const getStyledLinkButton = (
  buttonColor: string,
  color: string | undefined,
  size: ButtonSize | undefined,
  outlineColor: string
) => styled("a", buttonStyle(buttonColor, color, size, outlineColor));

export const getStyledButton = (
  buttonColor: string,
  color: string | undefined,
  size: ButtonSize | undefined,
  outlineColor: string
) => styled("button", buttonStyle(buttonColor, color, size, outlineColor));
