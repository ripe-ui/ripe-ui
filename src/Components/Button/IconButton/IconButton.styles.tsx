import { styled } from "@stitches/react";

const buttonStyle = (buttonColor: string, color: string) => ({
  width: "50px",
  height: "50px",
  border: "none",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  opacity: 0.85,
  cursor: "pointer",
  backgroundColor: buttonColor,

  svg: {
    display: "flex",
    width: "20px",
    height: "20px",
    margin: "auto",
  },

  "&:hover": {
    backgroundColor: buttonColor,
    filter: "brightness(85%)",
  },
});

export const getStyledLinkButton = (buttonColor: string, color: string) =>
  styled("a", buttonStyle(buttonColor, color));

export const getStyledButton = (buttonColor: string, color: string) =>
  styled("button", buttonStyle(buttonColor, color));
