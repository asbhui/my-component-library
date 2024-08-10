import { ExpandMore, IndeterminateCheckBox } from "@mui/icons-material";
import {
  PaletteOptions,
  Theme,
  alertClasses,
  alpha,
  createTheme,
  darken,
  lighten,
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import deepmerge from "deepmerge";

import CheckboxCheckedIcon from "./assets/checkboxChecked";
import CheckboxUncheckedIcon from "./assets/checkboxUnchecked";
import { EsureStepIcon } from "./assets/EsureStepIcon";

export const basePaletteOptions = Object.freeze<Partial<PaletteOptions>>({
  action: {
    disabled: "rgba(0, 0, 0, 0.26)",
  },
  background: {
    default: "#ffffff",
    paper: "#FFF",
    subtle: "#f5f5f5",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  divider: "#e0e0e0",
  error: {
    border: "rgba(218, 55, 46, 0.5)",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#aa221a",
    light: "#ec9b96",
    lightBg: lighten("rgb(218, 55, 46)", 0.9),
    main: "#fe6057",
    textDark: darken("rgb(218, 55, 46)", 0.6),
  },
  info: {
    border: "rgba(33, 150, 243, 0.5)",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#5184a4",
    light: "#b2d2e6",
    lightBg: "#e9f5fe",
    main: "#66a6cd",
    textDark: "#0d3c61",
  },
  mode: "light",
  primary: {
    background: "rgba(255, 131, 15, 0.08)",
    border: "rgba(255, 131, 15, 0.5)",
    contrastText: "#ffffff",
    dark: "#e26d00",
    light: "#ff9d42",
    main: "#ff830f",
  },
  primaryMainAlt: "#0c41a7",
  secondary: {
    background: "rgba(38, 99, 218, 0.08)",
    border: "rgba(38, 99, 218, 0.5)",
    contrastText: "#ffffff",
    dark: "#0c41a7",
    light: "#4d89ff",
    main: "#2663da",
  },
  secondaryMainAlt: "#0c41a7",
  success: {
    border: "rgba(21, 174, 101, 0.5)",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#108b50",
    light: "#8ad6b2",
    lightBg: "#e8f7f0",
    main: "#15ae65",
    textDark: darken("rgb(21, 174, 101)", 0.6),
  },
  text: {
    disabled: "rgba(0, 0, 0, 0.67)",
    hint: "rgba(0, 0, 0, 0.67)",
    primary: "rgba(0, 0, 0, 0.92)",
    secondary: "rgba(0, 0, 0, 0.8)",
  },
  warning: {
    border: "rgba(200, 173, 76, 0.5)",
    contrastText: "rgba(0, 0, 0, 0.9)",
    dark: "#c8ad4c",
    light: "#fdecaf",
    lightBg: "#fffbef",
    main: "#fbd960",
    textDark: "#645726",
  },
});

export const applyThemePalette = (
  paletteOptions: Partial<PaletteOptions>
): Theme =>
  createTheme({
    palette: {
      ...paletteOptions,
      contrastThreshold: 3,
      tonalOffset: {
        dark: 0.2,
        light: 0.2,
      },
    },
    shape: {
      borderRadius: 8,
    },
  });

export const applyThemeTypography = (
  theme: Theme,
  typographyOverride?: TypographyOptions
): Theme => {
  const defaultTypography: TypographyOptions = {
    allVariants: {
      fontKerning: "normal",
      fontWeight: 600,
      letterSpacing: 0,
      textRendering: "optimizeLegibility",
      textTransform: "none",
    },
    avatarLetter: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0.14),
      lineHeight: theme.typography.pxToRem(20),
    },
    body1: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(28),
    },
    body2: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(24),
    },
    button: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(24),
    },
    caption: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0.5),
      lineHeight: theme.typography.pxToRem(20),
    },
    fontFamily: "Nunito, sans-serif;",
    fontSize: 14,
    fontWeightBold: 800,
    fontWeightLight: 600,
    fontWeightMedium: 700,
    fontWeightRegular: 600,
    h1: {
      fontSize: theme.typography.pxToRem(32),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(-0.5),
      lineHeight: theme.typography.pxToRem(38),
    },
    h2: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(-0.5),
      lineHeight: theme.typography.pxToRem(32),
    },
    h3: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(-0.2),
      lineHeight: theme.typography.pxToRem(28),
    },
    h4: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(24),
    },
    h5: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 800,
      letterSpacing: theme.typography.pxToRem(0.3),
      lineHeight: theme.typography.pxToRem(24),
    },
    h6: {
      fontSize: theme.typography.pxToRem(11),
      fontWeight: 800,
      letterSpacing: theme.typography.pxToRem(0.1),
      lineHeight: theme.typography.pxToRem(16),
    },
    helperText: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0.4),
      lineHeight: theme.typography.pxToRem(20),
    },
    inputLabel: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(28),
    },
    inputText: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(0.15),
      lineHeight: theme.typography.pxToRem(28),
    },
    link1: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(28),
    },
    link2: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(24),
    },
    list: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(-0.2),
      lineHeight: theme.typography.pxToRem(32),
    },
    overline: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 600,
      letterSpacing: theme.typography.pxToRem(1),
      lineHeight: theme.typography.pxToRem(16),
    },
    subtitle1: {
      fontSize: theme.typography.pxToRem(48),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(64),
    },
    subtitle2: {
      fontSize: theme.typography.pxToRem(40),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(56),
    },
    tooltip: {
      fontSize: theme.typography.pxToRem(10),
      fontWeight: 700,
      letterSpacing: theme.typography.pxToRem(0),
      lineHeight: theme.typography.pxToRem(14),
    },
  };

  return createTheme({
    ...theme,
    typography: deepmerge(defaultTypography, typographyOverride ?? {}),
  });
};

export const applyThemeComponents = (theme: Theme): Theme =>
  createTheme({
    ...theme,
    components: {
      MuiAccordion: {
        defaultProps: {
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&::before": {
              content: "none",
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: theme.spacing(0, 1, 2),
            marginBottom: theme.spacing(-2),
            marginLeft: theme.spacing(-1),
            marginTop: theme.spacing(2),
          },
        },
      },
      MuiAccordionSummary: {
        defaultProps: {
          expandIcon: <ExpandMore color="secondary" />,
        },
        styleOverrides: {
          content: {
            "&$expanded": {
              margin: theme.spacing(1, 0),
            },
          },
          root: {
            padding: theme.spacing(0, 1),
            alignItems: "center",
            marginBottom: theme.spacing(-2),
            marginLeft: theme.spacing(-1),
            marginTop: theme.spacing(-2),
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          action: {
            alignItems: "flex-start",
            paddingTop: theme.spacing(1),
          },
          outlined: ({ ownerState: { severity = "success" } }) => ({
            [`& .${alertClasses.icon}`]: {
              color: theme.palette[severity].dark,
            },
            background: theme.palette[severity].lightBg,
            border: `1px solid red`,
            color: theme.palette[severity].textDark,
          }),
          filledError: {
            color: theme.palette.primary.contrastText,
          },
          filledInfo: {
            backgroundColor: theme.palette.secondary.dark,
          },
          filledSuccess: {
            color: theme.palette.primary.contrastText,
          },
          filledWarning: {
            color: theme.palette.primary.contrastText,
          },
          icon: {
            color: "inherit",
          },
          standardError: {
            "& .MuiAlert-icon": {
              color: theme.palette.error.dark,
            },
            borderColor: theme.palette.error.main,
            borderStyle: "solid",
            borderWidth: "1px",
            color: darken(theme.palette.error.main, 0.6),
          },
          standardInfo: {
            "& .MuiAlert-icon": {
              color: theme.palette.secondary.main,
            },
            borderColor: theme.palette.secondary.main,
            borderStyle: "solid",
            borderWidth: "1px",
            color: theme.palette.secondary.dark,
          },
          standardSuccess: {
            borderColor: theme.palette.success.dark,
            borderStyle: "solid",
            borderWidth: "1px",
          },
          standardWarning: {
            "& .MuiAlert-icon": {
              color: darken(theme.palette.warning.main, 0.6),
            },
            borderColor: theme.palette.warning.dark,
            borderStyle: "solid",
            borderWidth: "1px",
            color: theme.palette.warning.contrastText,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          centerRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          containedPrimary: {
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          containedSecondary: {
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },
          endIcon: {
            "&$iconSizeLarge": {
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(-0.5),
            },
            "&$iconSizeSmall": {
              marginLeft: theme.spacing(0.5),
              marginRight: theme.spacing(-0.5),
            },
            marginLeft: theme.spacing(0.75),
            marginRight: theme.spacing(-0.5),
          },
          outlined: {
            "&$disabled": {
              borderWidth: "2px",
            },
            "&.square": {
              borderRadius: "4px",
            },
            ...theme.typography.button,
            borderColor: theme.palette.grey[300],
            borderRadius: "18px",
            borderWidth: "2px",
            height: "36px",
            minWidth: "30px",
            padding: theme.spacing(0.75, 2),
          },
          outlinedPrimary: {
            "&$disabled": {
              borderColor: theme.palette.action.disabledBackground,
              borderWidth: "2px",
            },
            "&:hover": {
              borderWidth: "2px",
            },
            borderWidth: "2px",
          },
          outlinedSecondary: {
            "&$disabled": {
              borderColor: theme.palette.action.disabledBackground,
              borderWidth: "2px",
            },
            "&:hover": {
              borderColor: theme.palette.text.primary,
              borderWidth: "2px",
              color: theme.palette.text.primary,
            },
            borderColor: theme.palette.text.primary,
            borderWidth: "2px",
            color: theme.palette.text.primary,
          },
          root: {
            borderRadius: 18,
            "&.iconOnly": {
              "& .MuiSvgIcon-root": {
                fontSize: theme.typography.pxToRem(18),
              },
              height: "32px",
              minWidth: "26px",
              padding: theme.spacing(0.75),
              width: "32px",
            },
            "&.square": {
              borderRadius: "4px",
            },
            ...theme.typography.button,
            height: "36px",
            minWidth: "77px",
            padding: theme.spacing(0.75, 2),
          },
          sizeLarge: {
            "&.iconOnly": {
              "& .MuiSvgIcon-root": {
                fontSize: theme.typography.pxToRem(22),
              },
              height: "40px",
              padding: theme.spacing(1),
              width: "40px",
            },
            "&.square": {
              borderRadius: "4px",
            },
            borderRadius: "22px",
            fontSize: theme.typography.pxToRem(16),
            height: "44px",
            minWidth: "98px",
            letterSpacing: theme.typography.pxToRem(-0.2),
            lineHeight: theme.typography.pxToRem(28),
            padding: theme.spacing(1, 3),
          },
          sizeMedium: {
            "&.iconOnly": {
              "& .MuiSvgIcon-root": {
                fontSize: theme.typography.pxToRem(16),
              },
              height: "26px",
              padding: theme.spacing(0.5),
              width: "26px",
            },
            "&.square": {
              borderRadius: "4px",
            },
            fontWeight: 700,
            letterSpacing: theme.typography.pxToRem(0),
            borderRadius: "15px",
            fontSize: theme.typography.pxToRem(13),
            height: "30px",
            minWidth: "66px",
            lineHeight: theme.typography.pxToRem(24),
            padding: theme.spacing(0.75, 2),
          },
          sizeSmall: {
            "&.iconOnly": {
              "& .MuiSvgIcon-root": {
                fontSize: theme.typography.pxToRem(16),
              },
              height: "26px",
              padding: theme.spacing(0.5),
              width: "26px",
            },
            "&.square": {
              borderRadius: "4px",
            },
            borderRadius: "15px",
            fontSize: theme.typography.pxToRem(13),
            height: "30px",
            minWidth: "66px",
            lineHeight: theme.typography.pxToRem(22),
            padding: theme.spacing(0.5, 1.5),
          },
          startIcon: {
            "&$iconSizeLarge": {
              marginLeft: theme.spacing(-0.5),
              marginRight: theme.spacing(1),
            },
            "&$iconSizeSmall": {
              marginLeft: theme.spacing(-0.5),
              marginRight: theme.spacing(0.5),
            },
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(0.75),
          },
          text: {
            ...theme.typography.button,
            borderRadius: "18px",
            height: "36px",
            minWidth: "30px",
            padding: theme.spacing(0.75, 2),
          },
          textSecondary: {
            color: theme.palette.secondary.main,
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          centerRipple: true,
        },
      },
      MuiCheckbox: {
        defaultProps: {
          checkedIcon: <CheckboxCheckedIcon sx={{ fontSize: "24px" }} />,
          icon: <CheckboxUncheckedIcon />,
          indeterminateIcon: <IndeterminateCheckBox />,
        },
        styleOverrides: {
          root: {
            padding: theme.spacing(0.75),
          },
        },
      },
      MuiDrawer: {
        defaultProps: {
          elevation: 16,
        },
        styleOverrides: {
          paper: {
            padding: theme.spacing(2),
          },
          paperAnchorLeft: {
            [theme.breakpoints.down("xs")]: {
              maxWidth: 320,
            },
            maxWidth: 400,
            width: "100%",
          },
          paperAnchorRight: {
            [theme.breakpoints.down("xs")]: {
              maxWidth: 320,
            },
            maxWidth: 400,
            width: "100%",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "unset",
            },
            "&$error": {
              color: "unset",
            },
            fontSize: theme.typography.pxToRem(16),
            lineHeight: theme.typography.pxToRem(28),
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            // Controls height for selects
            "&.MuiOutlinedInput-input": {
              paddingBottom: theme.spacing(1),
              // Needs higher specificity to override built in styles
              paddingTop: theme.spacing(1),
            },

            // this makes the parent 44px to match Figma
            height: theme.typography.pxToRem(28),
            // Controls height for text fields
            lineHeight: theme.typography.pxToRem(28),
            fontSize: theme.typography.pxToRem(16),
            letterSpacing: theme.typography.pxToRem(0.15),
            padding: theme.spacing(1, 2),
          },
          root: {
            "&$disabled": {
              backgroundColor: theme.palette.grey[100],
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          filled: {
            "&$shrink": {
              transform: "none",
            },
            pointerEvents: "auto",
            transform: "none",
          },
          formControl: {
            left: undefined,
            position: "static",
            top: undefined,
            transform: "none",
          },
          outlined: {
            "&:not(.MuiInputLabel-shrink)": {
              // this is needed so the label is still centred with the input height changes above
              // non of the current designs use this type of label so wouldn't have been an issue
              // but didn't want to break MUI functionality
              transform: "translate(14px, 11px) scale(1)",
            },
          },
          shrink: {
            transform: "none",
          },
        },
      },
      MuiLink: {
        defaultProps: {
          rel: "noreferrer",
          target: "_blank",
          underline: "none",
          color: "secondary",
          variant: "body1",
        },
        styleOverrides: {
          button: {
            verticalAlign: "inherit",
          },
          root: {
            textUnderlineOffset: "4px",
            "&.MuiTypography-body1,": {
              fontWeight: 700,
              letterSpacing: theme.typography.pxToRem(-0.2),
            },
            "&.MuiTypography-body2,": {
              fontWeight: 700,
              letterSpacing: theme.typography.pxToRem(0),
            },
          },
          underlineHover: {
            "&:hover": {
              textDecorationThickness: "2px",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: theme.palette.secondary.background,
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette.secondary.background!,
                  0.12
                ),
              },
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
            },
          },
        },
      },
      MuiStepConnector: {
        styleOverrides: {
          root: {
            "&.Mui-completed,&.Mui-active": {
              ".MuiStepConnector-line": {
                borderColor: theme.palette.success.main,
                borderWidth: "2px",
              },
            },
            ".MuiStepConnector-line": {
              borderColor: theme.palette.secondary.border,
            },
            left: `calc(-50% + ${theme.spacing(2)})`,
            right: `calc(50% + ${theme.spacing(2)})`,
            top: theme.spacing(2),
            visibility: "hidden",
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            ".MuiStepIcon-text": {
              ...theme.typography.h3,
              // fontSize inside svgs only matches fontSize outside if the viewbox is the same as width/height
              // otherwise we need to multiply it by (viewBox / actually width)
              fontSize: `calc(${
                theme.typography.h3.fontSize ?? 16
              } * (24 / 32))`,
            },
          },
        },
      },
      MuiStepLabel: {
        defaultProps: {
          StepIconComponent: EsureStepIcon,
        },
        styleOverrides: {
          root: {
            "&.MuiStepLabel-horizontal .MuiStepLabel-iconContainer": {
              paddingRight: 0,
            },
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            // double class is to override specificity of Mui-active
            "& .MuiStepIcon-root.MuiStepIcon-root": {
              "&.Mui-active": {
                color: theme.palette.secondary.main,
              },
              color: theme.palette.secondary.background,
              height: theme.spacing(4),
              width: theme.spacing(4),
            },
            "& .MuiStepLabel-iconContainer.Mui-disabled .MuiStepIcon-text": {
              fill: theme.palette.secondary.dark,
            },
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            [`&.${toggleButtonClasses.selected}, &.${toggleButtonClasses.selected}:hover`]:
              {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              },
            [`&:not(.${toggleButtonClasses.selected}):hover`]: {
              marginTop: "-2px",
              paddingBottom: "2px",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            backgroundColor: "transparent",
            border: "none",
            color: theme.palette.secondary.main,
            padding: theme.spacing(0.25, 1.75),
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            [`&.${toggleButtonGroupClasses.root}`]: {
              [`.${toggleButtonGroupClasses.grouped}`]: {
                [`&:first-of-type, &:not(:first-of-type)`]: {
                  borderRadius: theme.shape.borderRadius * 2,
                },
              },
            },
            backgroundColor: theme.palette.secondary.background,
            borderRadius: theme.shape.borderRadius * 2,
            padding: theme.spacing(0.5),
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          arrow: {
            "&:before": {
              border: `solid 1px ${theme.palette.grey[300]}`,
              boxShadow: theme.shadows[1],
              color: theme.palette.grey[50],
            },
          },
          tooltip: {
            backgroundColor: theme.palette.grey[50],
            border: `solid 1px ${theme.palette.grey[300]}`,
            boxShadow: theme.shadows[1],
            color: theme.palette.text.primary,
            maxWidth: 335,
            padding: theme.spacing(1),
            ...theme.typography.body2,
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variant: "body1",
          variantMapping: {
            avatarLetter: "span",
            body1: "p",
            body1EB: "p",
            body2: "p",
            caption: "span",
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            helperText: "span",
            inherit: "p",
            subtitle1: "h1",
            subtitle2: "h2",
            tooltip: "span",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          label: {
            fontSize: theme.typography.pxToRem(13),
            fontWeight: 600,
            lineHeight: theme.typography.pxToRem(18),
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            margin: theme.spacing(1, 0.25),
            paddingRight: theme.spacing(1),
            "&$disabled": {
              color: "inherit",
            },
          },
          labelPlacementBottom: {
            "& $label": {
              margin: theme.spacing(0.25, 0.25),
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
            },
            justifyContent: "center",
            paddingTop: theme.spacing(0.5),
          },
          root: {
            "&.contained": {
              "&.MuiFormControlLabel-labelPlacementBottom": {
                "&.checked $label": {
                  marginTop: 0,
                  marginBottom: 0,
                },
                "& $label": {
                  fontSize: theme.typography.pxToRem(13),
                  lineHeight: theme.typography.pxToRem(22),
                },
              },
              "&:not(.MuiFormControlLabel-labelPlacementBottom)": {
                "& $label": {
                  fontSize: theme.typography.pxToRem(16),
                  lineHeight: theme.typography.pxToRem(28),
                },
                "&.medium $label": {
                  fontSize: theme.typography.pxToRem(14),
                  lineHeight: theme.typography.pxToRem(24),
                },
                "&.small $label": {
                  fontSize: theme.typography.pxToRem(13),
                  lineHeight: theme.typography.pxToRem(22),
                },
              },
              "& $label": {
                fontWeight: 700,
                letterSpacing: theme.typography.pxToRem(-0.2),
                margin: theme.spacing(0.5, 0.25),
              },
              "&$disabled": {
                border: `solid 2px ${theme.palette.action.disabled}`,
                color: theme.palette.text.disabled,
              },
              "&.checked": {
                "&.primary": {
                  "&.invert": {
                    "&$disabled": {
                      backgroundColor: theme.palette.grey[400],
                      border: `solid 2px ${theme.palette.grey[400]}`,
                    },
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                  border: `solid 2px ${theme.palette.primary.main}`,
                },
                "&.secondary": {
                  "&.invert": {
                    "&$disabled": {
                      backgroundColor: theme.palette.grey[400],
                      border: `solid 2px ${theme.palette.grey[400]}`,
                    },
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                  },
                  border: `solid 2px ${theme.palette.secondary.main}`,
                },
              },
              border: `solid 2px ${theme.palette.common.black}`,
              borderRadius: theme.shape.borderRadius,
            },
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
  });
