import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { getColor } from "../../../Utils/getColor";
import { getStyledLinkButton } from "./IconButton.styles";

export interface IconButtonProps {
  icon?: ReactNode;
  bg?: string;
  color?: string;
  href: string;
  onClick?(): void;
}

export function IconButton({
  icon,
  bg,
  href,
  color,
  onClick,
}: IconButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getColor(theme, bg);

  const StyledButton = getStyledLinkButton(buttonColor, "black");

  return (
    <StyledButton href={href} type="button">
      {icon}
    </StyledButton>
  );
}

IconButton.defaultProps = {
  icon: <div />,
  bg: null,
  color: null,
  onClick: () => {},
};
