import { css } from "@stitches/react";
import React, { ReactNode, useContext } from "react";
import { ButtonSize } from "src/Components/Buttons/ButtonSize";
import { IconButton } from "src/Components/Buttons/IconButton/IconButton";
import { getStyledButton } from "src/Components/Buttons/IconButton/IconButton.styles";
import { getBg, getPrimary, getShade, getTextColor } from "src/Utils/getColor";
import { ThemeContext } from "../../ThemeContext";
import { InputSize } from "../InputSize";
import { buttonStyle, getStyledInput, InputWrapper } from "./Input.styles";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  bg?: string;
  color?: string;
  outline?: string;
  size?: InputSize;
  icon?: ReactNode;
  value?: string;
  onChange?(): void;
  onIconClick?(): void;
}

export function Input({
  bg,
  color,
  outline,
  placeholder,
  size,
  icon,
  value,
  key,
  onChange,
  onIconClick,
}: InputProps) {
  const theme = useContext(ThemeContext);
  let buttonColor = getBg(theme, bg);
  const textColor = getTextColor(theme, color);
  const outlineColor = getPrimary(theme, outline);
  buttonColor = getShade(buttonColor, -20);
  const inputWrapper = InputWrapper(size);

  const StyledInput = getStyledInput(buttonColor, outlineColor, textColor);

  if (icon == null) {
    return (
      <div className={inputWrapper()} key="2">
        <input
          className={buttonStyle(buttonColor, outlineColor, color!)()}
          key="1"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
  const StyledButton = getStyledButton(
    buttonColor,
    color,
    ButtonSize.Medium,
    outlineColor
  );

  return (
    <div className={inputWrapper()} key="2">
      <input
        className={buttonStyle(buttonColor, outlineColor, color!)()}
        key="1"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        // css={{
        //   borderTopRightRadius: "0px",
        //   borderBottomRightRadius: "0px",
        //   marginRight: "0px",
        // }}
      />
    </div>
    // {icon != null ? (
    //   <StyledButton
    //     css={{
    //       height: "44px",
    //       width: "50px",
    //       marginTop: "2px",
    //       marginBottom: "2px",
    //       borderTopLeftRadius: "0px",
    //       borderBottomLeftRadius: "0px",
    //     }}
    //     onClick={onIconClick}
    //   >
    //     {icon}
    //   </StyledButton>
    // ) : (
    //   ""
    // )}
  );
}

Input.defaultProps = {
  bg: null,
  color: null,
  outline: null,
  size: InputSize.Small,
  icon: null,
  value: null,
  onChange: () => {},
  onIconClick: () => {},
};
