import { css } from "@stitches/react";

export const listStyle = (
  listColor: string,
  hoverColor: string,
  outlineColor: string,
  color: string
) =>
  css({
    all: "unset",
    backgroundColor: listColor,
    color,
    width: "100%",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "15px",
    cursor: "pointer",
    outline: "none",
    border: `solid 2px ${listColor}`,
    "&:hover": {
      backgroundColor: hoverColor,
      transition: "all .1s ease-in",
    },
    "&:focus-visible": {
      border: `solid 2px ${outlineColor}`,
      transition: "all .1s ease-in",
    },
  });
