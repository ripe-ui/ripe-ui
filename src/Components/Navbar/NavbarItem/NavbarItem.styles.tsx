import { styled } from "@stitches/react";
import { Trigger, Content } from "@radix-ui/react-tooltip";

export const getStyledButton = (
  buttonColor: string,
  wide: boolean | undefined,
  active: boolean | undefined,
  transparent: boolean | undefined
) =>
  styled("button", {
    width: wide ? "100%" : "50px",
    paddingTop: transparent ? "8px" : "0px",
    paddingBottom: transparent ? "8px" : "0px",
    height: transparent ? "auto" : "50px",
    border: "none",
    borderRadius: transparent ? "0px" : "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: transparent && !active ? "white" : "black",
    margin: "auto",
    cursor: "pointer",

    backgroundColor: transparent && !active ? "transparent" : buttonColor,

    svg: {
      display: "flex",
      width: "20px",
      height: "20px",
      margin: "auto",
    },

    "&:hover": {
      backgroundColor: buttonColor,
      filter: transparent ? "" : "brightness(85%)",
      color: "black",
    },
  });

export const TextWrapper = styled("div", {
  flexGrow: 1,
  margin: "auto",
  marginLeft: "20px",
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
