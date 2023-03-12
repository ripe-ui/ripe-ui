import { ThemeProps } from "../Components/ThemeContext";

export function getColor(theme: ThemeProps | null, color: string | undefined) {
  return color && color.length !== 0 ? color! : theme?.primaryColor ?? "white";
}
