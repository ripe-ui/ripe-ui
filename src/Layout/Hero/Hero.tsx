import React from "react";
import { MdColorLens } from "react-icons/md";
import { StyledHero } from "./Hero.styles";

export interface HeroProps {
  title: string;
  subtitle: string;
  color?: string;
  children: React.ReactNode;
}

export function Hero({ children, title, subtitle, color }: HeroProps) {
  return (
    <StyledHero>
      <div
        style={{
          margin: "auto",
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "20px",
          textAlign: "center",
          color,
        }}
      >
        {title}
      </div>
      <div
        style={{
          margin: "auto",
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "30px",
          textAlign: "center",
          color,
        }}
      >
        {subtitle}
      </div>
      <div style={{ display: "flex", margin: "auto", gap: "8px" }}>
        {children}
      </div>
    </StyledHero>
  );
}

Hero.defaultProps = {
  color: null,
};
