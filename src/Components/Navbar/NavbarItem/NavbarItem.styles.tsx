import { styled } from "@stitches/react";
import { Trigger, Content } from "@radix-ui/react-tooltip";

export const getStyledButton = (
  buttonColor: string,
  wide: boolean | undefined,
  active: boolean | undefined
) =>
  styled("button", {
    width: wide ? "100%" : "50px",
    height: "50px",
    border: "none",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    opacity: 0.85,
    margin: "auto",
    cursor: "pointer",
    backgroundColor: buttonColor,
    filter: active ? "brightness(85%)" : "",

    svg: {
      display: "flex",
      width: "20px",
      height: "20px",
      margin: "auto",
    },

    "&:hover": {
      backgroundColor: buttonColor,
      filter: "brightness(85%)",
    },
  });

export const TextWrapper = styled("div", {
  flexGrow: 1,
  margin: "auto",
  textAlign: "left",
  fontSize: "14px",
});

export const IconWrapper = styled("div", {
  paddingLeft: "10px",
  paddingRight: "10px",
  margin: "auto",

  svg: {
    display: "flex",
    width: "20px",
    height: "20px",
    margin: "auto",
  },
});

export const TooltipTrigger = styled(Trigger, {
  backgroundColor: "transparent",
  border: "none",
  width: "60px",
});

export const TooltipContent = styled(Content, {
  borderRadius: "8px",
  backgroundColor: "#1c1c1d",
  padding: "8px",
  color: "white",
});
