import { styled } from "@stitches/react";

export const getAppContainer = (navbarOpen: boolean) =>
  styled("div", {
    display: "flex",
    flexDirection: "column",
    color: "white",
    ".navbar": {
      width: "100%",
      height: "100%",
      display: navbarOpen ? "block" : "none",
    },
    ".content": {
      width: "100%",
      display: navbarOpen ? "none" : "block",
    },

    "@media (min-width: 768px)": {
      flexDirection: "row",
      ".navbar": {
        width: "250px",
        display: "block",
      },
      ".content": {
        width: "100%",
        display: "block",
      },
    },
  });
