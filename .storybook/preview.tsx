import type { Preview } from "@storybook/react";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { themeEsure, themeSheilasWheels } from "../lib/theme";
import React from "react";

const brandToThemeMap = {
  esure: themeEsure,
  sw: themeSheilasWheels,
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = brandToThemeMap[context.globals.brand];
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    brand: {
      description: "The theme branding for components",
      defaultValue: "esure",
      toolbar: {
        title: "Brand",
        items: [
          { value: "esure", title: "esure" },
          { value: "sw", title: "Sheilas' Wheels" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
