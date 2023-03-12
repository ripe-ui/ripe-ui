import { styled } from "@stitches/react";

export const getStyledNavbar = (
  navbarColor: string,
  wide: boolean | undefined
) =>
  styled("div", {
    backgroundColor: navbarColor,
    border: "none",
    width: wide ? "100%" : "80px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  });
