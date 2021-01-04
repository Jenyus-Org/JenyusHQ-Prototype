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
    MuiCard: {
      root: {
        boxShadow: "0 5px 15px 5px rgba(182, 170, 170, 0.15)",
        borderRadius: "15px",
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

const darkTheme = {
  paper: "#1F1F1F",
  default: "#1A1A1A",
};

const purpleDarkTheme = {
  paper: "#242631",
  default: "#1F1F27",
};

const blueDarkTheme = {
  paper: "#1D262F",
  default: "#1f2327",
};

export const makeDarkTheme = (theme?: ThemeOptions) =>
  createMuiTheme({
    ...theme,
    palette: {
      type: "dark",
      ...theme?.palette,
      divider: "#2e2e2e",
      background: {
        ...purpleDarkTheme,
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
          boxShadow: "0 4px 10px 0rgba(12, 12, 12, 0.8)",
        },
        colorDefault: {
          backgroundColor: purpleDarkTheme.paper,
          color: "#eee",
        },
      },
      MuiDrawer: {
        paperAnchorDockedLeft: {
          ...theme?.overrides?.MuiDrawer?.paperAnchorDockedLeft,
          boxShadow: "0 4px 10px 0 rgba(12, 12, 12, 0.8)",
        },
      },
      MuiCard: {
        root: {
          ...theme?.overrides?.MuiCard?.root,
          boxShadow: "0 5px 15px 5px rgba(12, 12, 12, 0.8)",
        },
      },
    },
  });
