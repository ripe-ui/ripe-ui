import { styled } from "@stitches/react";

export const getStyledButton = (buttonColor: string, color: string) =>
  styled("button", {
    backgroundColor: buttonColor,
    color,
    border: 0,
    borderRadius: "8px",
    height: "42px",
    fontSize: "14px",
    cursor: "pointer",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:not([data-disabled]):hover": {
      filter: "brightness(85%)",
      backgroundColor: buttonColor,
    },
  });
