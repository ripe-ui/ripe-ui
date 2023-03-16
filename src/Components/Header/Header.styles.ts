import { styled } from "@stitches/react";

export const getStyledHeader = (bg: string) =>
  styled("div", {
    backgroundColor: bg,
    width: "100vw",
  });

export const HeaderContent = styled("div", {
  display: "flex",
  padding: "20px 10px",
});

export const HeaderRight = styled("div", {
  flexGrow: 1,
  display: "flex",
  justifyContent: "right",
  gap: "3px",
  margin: "auto",
});

export const Logo = styled("div", {
  fontSize: "30px",
  paddingLeft: "20px",
  margin: "auto",
});
