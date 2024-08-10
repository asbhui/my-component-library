import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { PaletteOptions, Theme } from "@mui/material";

import {
  applyThemeComponents,
  applyThemePalette,
  applyThemeTypography,
  basePaletteOptions,
} from "../baseConfig";

const paletteOptions = Object.freeze<Partial<PaletteOptions>>({
  ...basePaletteOptions,
  error: {
    border: "rgba(255, 54, 102, 0.5)",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#b32647",
    light: "#ffafc2",
    lightBg:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #ff3666",
    main: "#ff3666",
    textDark:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #ff3666",
  },
  info: {
    border: "#4775ca",
    contrastText: "#ffffff",
    dark: "#004693",
    light: "#c8d6ef",
    lightBg:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4775ca",
    main: "#4775ca",
    textDark:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #4775ca",
  },
  primary: {
    background: "rgba(53, 33, 65, 0.08)",
    border: "rgba(53, 33, 65, 0.5)",
    contrastText: "#ffffff",
    dark: "#100815",
    light: "#806481",
    main: "#352141",
  },
  primaryMainAlt: "#352141",
  secondary: {
    background: "rgba(209, 60, 127, 0.08)",
    border: "rgba(209, 60, 127, 0.5)",
    contrastText: "#ffffff",
    dark: "#a80055",
    light: "#ff4a9c",
    main: "#d13c7f",
  },
  secondaryMainAlt: "#d13c7f",
  success: {
    border: "rgba(0, 115, 112, 0.5)",
    contrastText: "#ffffff",
    dark: "#00514e",
    light: "#99c7c6",
    lightBg:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #007370",
    main: "#007370",
    textDark:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #007370",
  },
  text: {
    disabled: "rgba(0, 0, 0, 0.67)",
    hint: "rgba(0, 0, 0, 0.67)",
    primary: "rgba(0, 0, 0, 0.92)",
    secondary: "rgba(0, 0, 0, 0.8)",
  },
  warning: {
    border: "#fbd960",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#806a2c",
    light: "#fdecaf",
    lightBg:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #ffd559",
    main: "#ffd559",
    textDark:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #ffd559",
  },
});

const customThemeTypography = (theme: Theme) => ({
  allVariants: {
    fontFamily: "Poppins, sans-serif",
  },
  avatarLetter: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 500,
    letterSpacing: theme.typography.pxToRem(0.14),
    lineHeight: theme.typography.pxToRem(20),
  },
  body1: {
    fontWeight: 400,
  },
  body1EB: {
    fontWeight: 600,
  },
  body2: {
    fontWeight: 400,
  },
  caption: {
    fontWeight: 500,
  },
  fontFamily: "Poppins, sans-serif",
  fontWeightBold: 600,
  fontWeightLight: 400,
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  h5: {
    fontWeight: 700,
  },
  h6: {
    fontWeight: 700,
  },
  link1: {
    fontWeight: 600,
  },
});

let themeSheilasWheels: Theme;

themeSheilasWheels = applyThemePalette(paletteOptions);
themeSheilasWheels = applyThemeTypography(
  themeSheilasWheels,
  customThemeTypography(themeSheilasWheels)
);
themeSheilasWheels = applyThemeComponents(themeSheilasWheels);

const theme = themeSheilasWheels;

export default theme;
