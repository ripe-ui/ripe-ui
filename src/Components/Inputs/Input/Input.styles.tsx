import { styled } from "@stitches/react";
import { InputSize } from "../InputSize";

function getInputSize(size: InputSize | undefined): string {
  switch (size) {
    case InputSize.Small:
      return "200px";
    case InputSize.Medium:
      return "300px";
    case InputSize.Large:
      return "400px";
    case InputSize.Full:
      return "none";
    default:
      return "200px";
  }
}

const buttonStyle = (
  buttonColor: string,
  outlineColor: string,
  color: string,
  size: InputSize | undefined
) => ({
  backgroundColor: buttonColor,
  color,
  width: "100%",
  border: `solid 2px ${buttonColor}`,
  margin: "2px",
  borderRadius: "8px",
  height: "42px",
  fontSize: "14px",
  paddingLeft: "20px",
  paddingRight: "20px",
  maxWidth: getInputSize(size),
  outline: "none",
  "&:hover": {
    border: `solid 2px ${outlineColor}`,
    transition: "all .2s ease-in",
  },
  "&:focus": {
    border: `solid 2px ${outlineColor}`,
    transition: "all .2s ease-in",
  },
});

export const getStyledInput = (
  bg: string,
  outlineColor: string,
  color: string,
  size: InputSize | undefined
) => styled("input", buttonStyle(bg, outlineColor, color, size));
