import { styled } from "@stitches/react";

export const getStyledNavbar = (
  navbarColor: string,
  wide: boolean | undefined,
  transparent: boolean | undefined
) =>
  styled("div", {
    backgroundColor: transparent ? "transparent" : navbarColor,
    border: "none",
    width: wide ? "100%" : "80px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    borderRight: transparent ? "1px solid rgb(34, 34, 34)" : "",
  });
