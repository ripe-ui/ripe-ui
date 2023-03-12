import { styled } from "@stitches/react";

export const getStyledHeader = (bg: string) =>
  styled("div", {
    backgroundColor: bg,
    padding: "20px 10px",
    display: "flex",
  });

export const HeaderRight = styled("div", {
  flexGrow: 1,
  display: "flex",
  justifyContent: "right",
  gap: "3px",
});

export const Logo = styled("div", {
  fontSize: "30px",
  paddingLeft: "20px",
  margin: "auto",
});
