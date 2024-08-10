import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypeBackground {
    subtle?: string;
  }
  interface PaletteColor {
    background?: string;
    border?: string;
    lightBg?: string;
    textDark?: string;
  }

  interface Palette {
    // For some reason the designs use two different palette colours for the same component depending on brand
    // These colours are so we can avoid having any logic around switching colours based on brand at the component level
    /** esure secondary dark and SW primary main - footer background */
    primaryMainAlt: string;
    /** esure secondary dark and SW secondary main - headers */
    secondaryMainAlt: string;
  }

  interface PaletteOptions {
    /** esure secondary dark and SW primary main - footer background */
    primaryMainAlt?: string;
    /** esure secondary dark and SW secondary main - headers */
    secondaryMainAlt?: string;
  }

  interface SimplePaletteColorOptions {
    background?: string;
    border?: string;
    lightBg?: string;
    textDark?: string;
  }

  interface TypeText {
    hint?: string;
  }

  interface TypographyVariants {
    avatarLetter: React.CSSProperties;
    body1: React.CSSProperties;
    body1EB: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
    helperText: React.CSSProperties;
    inputLabel: React.CSSProperties;
    inputText: React.CSSProperties;
    link1: React.CSSProperties;
    link2: React.CSSProperties;
    list: React.CSSProperties;
    overline: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    tooltip: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    avatarLetter?: React.CSSProperties;
    body1?: React.CSSProperties;
    body1EB?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption?: React.CSSProperties;
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h4?: React.CSSProperties;
    h5?: React.CSSProperties;
    h6?: React.CSSProperties;
    helperText?: React.CSSProperties;
    inputLabel?: React.CSSProperties;
    inputText?: React.CSSProperties;
    link1?: React.CSSProperties;
    link2?: React.CSSProperties;
    list?: React.CSSProperties;
    overline?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    tooltip?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    avatarLetter: true;
    body1: true;
    body1EB: true;
    body2: true;
    caption: true;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    helperText: true;
    inputLabel: true;
    inputText: true;
    link1: true;
    link2: true;
    list: true;
    overline: true;
    subtitle1: true;
    subtitle2: true;
    tooltip: true;
  }
}

export * from "@mui/material/styles";
export * from "@mui/material/Typography";
