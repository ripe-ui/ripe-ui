import * as React from "react";
import { getBase } from "./ThemeContext.styles";

export interface ThemeProps {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  textColor: string;
  bg: string;
}

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) {
  const Base = getBase(theme.fontFamily);
  return (
    <ThemeContext.Provider value={theme}>
      <Base>{children}</Base>
    </ThemeContext.Provider>
  );
}
