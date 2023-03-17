import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { getBg, getPrimary } from "../../../Utils/getColor";
import { getStyledButton, getStyledLinkButton } from "./IconButton.styles";
import { ButtonSize } from "../ButtonSize";

export interface IconButtonProps {
  icon?: ReactNode;
  bg?: string;
  outline?: string;
  color?: string;
  href?: string;
  size?: ButtonSize;
  onClick?(): void;
}

export function IconButton({
  icon,
  bg,
  outline,
  href,
  color,
  size,
  onClick,
}: IconButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getPrimary(theme, bg);
  let outlineColor = getPrimary(theme, outline);
  if (bg == null) {
    outlineColor = "white";
  }

  if (href != null) {
    const StyledButton = getStyledLinkButton(
      buttonColor,
      color,
      size,
      outlineColor
    );
    return (
      <StyledButton tabIndex={0} href={href} type="button">
        {icon}
      </StyledButton>
    );
  }

  const StyledButton = getStyledButton(buttonColor, color, size, outlineColor);
  return (
    <StyledButton tabIndex={0} onClick={onClick} type="button">
      {icon}
    </StyledButton>
  );
}

IconButton.defaultProps = {
  icon: <div />,
  bg: null,
  href: null,
  size: ButtonSize.Small,
  color: null,
  outline: null,
  onClick: () => {},
};
