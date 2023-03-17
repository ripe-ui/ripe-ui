/* eslint-disable no-bitwise */
import { ThemeProps } from "../Components/ThemeContext";

export function getPrimary(
  theme: ThemeProps | null,
  color: string | undefined
) {
  return color && color.length !== 0 ? color : theme?.primaryColor ?? "#ffffff";
}

export function getBg(theme: ThemeProps | null, bg: string | undefined) {
  return bg && bg.length !== 0 ? bg : theme?.bg ?? "#ffffff";
}
export function getTextColor(
  theme: ThemeProps | null,
  color: string | undefined
) {
  return color && color.length !== 0 ? color : theme?.textColor ?? "#ffffff";
}

export function getShade(color: string, amount: number) {
  let usePound = false;
  let formattedColor = color;

  if (color[0] === "#") {
    formattedColor = color.slice(1);
    usePound = true;
  }

  const num = parseInt(formattedColor, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
