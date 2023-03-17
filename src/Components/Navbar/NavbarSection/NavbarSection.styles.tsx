import { styled } from "@stitches/react";

export const getMainNavbarSection = (
  wide: boolean | undefined,
  transparent: boolean | undefined
) =>
  styled("div", {
    flexGrow: transparent ? 0 : 1,
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: wide ? "100%" : "auto",
  });

export const getFooterNavbarSection = (wide: boolean | undefined) =>
  styled("div", {
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: wide ? "100%" : "auto",
  });

export const LogoNavbarCenter = styled("div", {
  margin: "auto",
  marginTop: "10px",
});

export const LogoNavbar = styled("div", {
  paddingRight: "20px",
  paddingLeft: "20px",
  paddingTop: "30px",
  paddingBottom: "10px",
});

export const Stack = styled("div", {
  display: "flex",
  gap: "4px",
  flexDirection: "column",
});
