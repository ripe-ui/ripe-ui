import { styled } from "@stitches/react";

export const getMainNavbarSection = (wide: boolean | undefined) =>
  styled("div", {
    flexGrow: 1,
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    width: wide ? "90%" : "auto",
  });

export const getFooterNavbarSection = (wide: boolean | undefined) =>
  styled("div", {
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: wide ? "90%" : "auto",
  });

export const LogoNavbarSection = styled("div", {
  margin: "auto",
  marginTop: "10px",
});

export const Stack = styled("div", {
  display: "flex",
  gap: "4px",
  flexDirection: "column",
});
