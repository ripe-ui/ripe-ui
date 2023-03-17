import React from "react";
import theme from "./storybook-theme";
import { ThemeProvider } from "../src/Components/ThemeContext";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        primaryColor: "rgba(243, 220, 81, 1)",
        secondaryColor: "red",
        bg: "#333333",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
