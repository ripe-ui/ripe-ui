import React from "react";
import { getAppContainer } from "./AppContainer.styles";

export interface AppContainerProps {
  children: React.ReactNode;
  navbarOpen: boolean;
}

export function AppContainer({ children, navbarOpen }: AppContainerProps) {
  const StyledContent = getAppContainer(navbarOpen);
  return <StyledContent>{children}</StyledContent>;
}
