import { styled } from "@stitches/react";

export const getStyledHeader = (
  bg: string,
  dividerColor: string | undefined,
  fixed: boolean
) =>
  styled("div", {
    backgroundColor: bg,
    position: fixed ? "fixed" : "relative",
    width: "100%",
    borderBottom: `1px solid ${dividerColor != null ? dividerColor : bg}`,
  });

export const HeaderContent = styled("div", {
  display: "flex",
  padding: "20px 10px",
});

export const ButtonContainer = styled("div", {
  margin: "auto",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

export const HeaderRight = styled("div", {
  flexGrow: 1,
  display: "flex",
  justifyContent: "right",
  gap: "3px",
  margin: "auto",
});

export const DesktopOnlyContainer = styled("div", {
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
});

export const Logo = styled("div", {
  fontSize: "30px",
  paddingLeft: "20px",
  margin: "auto",
});
