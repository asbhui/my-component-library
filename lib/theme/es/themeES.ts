import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";

import { PaletteOptions, Theme } from "@mui/material";

import {
  applyThemeComponents,
  applyThemePalette,
  applyThemeTypography,
  basePaletteOptions,
} from "../baseConfig";

const paletteOptions = Object.freeze<Partial<PaletteOptions>>({
  ...basePaletteOptions,
});

let themeEsure: Theme;

themeEsure = applyThemePalette(paletteOptions);
themeEsure = applyThemeTypography(themeEsure);
themeEsure = applyThemeComponents(themeEsure);

const theme = themeEsure;

export default theme;
