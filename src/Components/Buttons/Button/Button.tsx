import React, { useContext } from "react";
import { getPrimary } from "src/Utils/getColor";
import { ThemeContext } from "../../ThemeContext";
import { getStyledButton, getStyledLinkButton } from "./Button.styles";

export interface ButtonProps {
  bg?: string;
  color?: string;
  children: React.ReactNode;
  href?: string;
  onClick?(): void;
}

export function Button({ bg, color, children, href, onClick }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const buttonColor = getPrimary(theme, bg);

  if (href != null) {
    const StyledButton = getStyledLinkButton(buttonColor, color!);
    return (
      <StyledButton
        tabIndex={0}
        href={href}
        type="button"
        css={{ display: "inline-flex" }}
      >
        <div style={{ margin: "auto" }}>{children}</div>
      </StyledButton>
    );
  }

  const StyledButton = getStyledButton(buttonColor, color!);
  return (
    <StyledButton tabIndex={0} onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
}
Button.defaultProps = {
  bg: null,
  color: null,
  href: null,
  onClick: () => {},
};
