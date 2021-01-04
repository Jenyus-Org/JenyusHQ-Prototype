import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fd9cb4",
      main: "#cc0033",
      dark: "#b8002e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#93ffe4",
      main: "#00cc99",
      dark: "#00bd8e",
      contrastText: "#000",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "0 4px 10px 0 rgba(182, 170, 170, 0.15)",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "none",
        boxShadow: "0 4px 10px 0 rgba(182, 170, 170, 0.15)",
      },
    },
    MuiListItemIcon: {
      root: {
        paddingLeft: "8px",
      },
    },
    MuiButton: {
      root: {
        padding: "8px 16px",
        borderRadius: "5px",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
});

export const makeLightTheme = (theme?: ThemeOptions) =>
  createMuiTheme({
    ...theme,
    overrides: {
      ...theme?.overrides,
      MuiAppBar: {
        ...theme?.overrides?.MuiAppBar,
        colorDefault: {
          backgroundColor: "#fff",
        },
      },
    },
  });

export const makeDarkTheme = (theme?: ThemeOptions) =>
  createMuiTheme({
    ...theme,
    palette: {
      type: "dark",
      ...theme?.palette,
      divider: "#2e2e2e",
      background: {
        paper: "#1a1a1a",
        default: "#212121",
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
      },
    },
    overrides: {
      ...theme?.overrides,
      MuiAppBar: {
        ...theme?.overrides?.MuiAppBar,
        root: {
          boxShadow: "0 4px 10px 0rgba(56, 56, 56, 0.3)",
        },
        colorDefault: {
          backgroundColor: "#1a1a1a",
          color: "#eee",
        },
      },
      MuiDrawer: {
        paperAnchorDockedLeft: {
          ...theme?.overrides?.MuiDrawer?.paperAnchorDockedLeft,
          boxShadow: "0 4px 10px 0 rgba(56, 56, 56, 0.3)",
        },
      },
    },
  });
