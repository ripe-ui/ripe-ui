import React from "react";
import { getStyledContent } from "./Content.styles";

export interface ContentProps {
  fixed: boolean;
  children: React.ReactNode;
}

export function Content({ children, fixed }: ContentProps) {
  const StyledContent = getStyledContent(fixed);
  return <StyledContent>{children}</StyledContent>;
}
