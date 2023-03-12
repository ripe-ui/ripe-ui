import * as React from "react";

export interface ThemeProps {
  primaryColor: string;
  secondaryColor: string;
}

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
