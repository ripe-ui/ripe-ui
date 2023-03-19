import { styled } from "@stitches/react";

export const getStyledContent = (fixed: boolean) =>
  styled("div", {
    paddingTop: fixed ? "94px" : "0",
  });
