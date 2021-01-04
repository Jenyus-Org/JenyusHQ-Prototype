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
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "none",
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
        borderRadius: "15px",
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "separate",
        borderSpacing: "0 5px",
      },
    },
    MuiTableRow: {
      root: {
        boxShadow: "none",
        borderRadius: "15px",
      },
    },
    MuiTableCell: {
      head: {
        textTransform: "uppercase",
        fontSize: "0.75rem",
        fontWeight: 800,
        color: "rgba(49, 49, 49, 0.87)",
      },
    },
  },
});

const lightTheme = {
  cardShadow: "0 4px 10px 0 rgba(160, 160, 160, 0.3)",
};

const lightThemeBackground = {
  paper: "#fff",
  default: "#edeef3",
};

export const makeLightTheme = (theme?: ThemeOptions) =>
  createMuiTheme({
    ...theme,
    palette: {
      ...theme?.palette,
      background: {
        ...lightThemeBackground,
      },
    },
    overrides: {
      ...theme?.overrides,
      MuiAppBar: {
        ...theme?.overrides?.MuiAppBar,
        colorDefault: {
          backgroundColor: "#fff",
        },
        root: {
          ...theme?.overrides?.MuiAppBar?.root,
        },
      },
      MuiCard: {
        ...theme?.overrides?.MuiCard,
        root: {
          ...theme?.overrides?.MuiCard?.root,
          boxShadow: lightTheme.cardShadow,
        },
      },
      MuiDrawer: {
        ...theme?.overrides?.MuiDrawer,
        paperAnchorDockedLeft: {
          ...theme?.overrides?.MuiDrawer?.paperAnchorDockedLeft,
          boxShadow: lightTheme.cardShadow,
        },
      },
      MuiTableContainer: {
        ...theme?.overrides?.MuiTableContainer,
        root: {
          ...theme?.overrides?.MuiTableContainer?.root,
          background: lightThemeBackground.paper,
        },
      },
      MuiTableCell: {
        ...theme?.overrides?.MuiTableCell,
        root: {
          ...theme?.overrides?.MuiTableCell?.root,
          padding: "20px",
        },
      },
    },
  });

const darkTheme = {
  cardShadow: "0 5px 15px 5px rgba(12, 12, 12, 0.8)",
  frameShadow: "0 4px 10px 0rgba(12, 12, 12, 0.8)",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const darkThemeBackground = {
  paper: "#1F1F1F",
  default: "#1A1A1A",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const purpleDarkThemeBackground = {
  paper: "#242631",
  default: "#1F1F27",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blueDarkThemeBackground = {
  paper: "#1D262F",
  default: "#1f2327",
};

const makeDarkThemeFactory = (backgroundColors = purpleDarkThemeBackground) => {
  return (theme?: ThemeOptions) =>
    createMuiTheme({
      ...theme,
      palette: {
        ...theme?.palette,
        divider: "#2e2e2e",
        background: {
          ...backgroundColors,
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
            boxShadow: darkTheme.frameShadow,
          },
          colorDefault: {
            backgroundColor: backgroundColors.paper,
            color: "#eee",
          },
        },
        MuiDrawer: {
          paperAnchorDockedLeft: {
            ...theme?.overrides?.MuiDrawer?.paperAnchorDockedLeft,
            boxShadow: darkTheme.frameShadow,
          },
        },
        MuiCard: {
          ...theme?.overrides?.MuiCard,
          root: {
            ...theme?.overrides?.MuiCard?.root,
            boxShadow: darkTheme.cardShadow,
          },
        },
        MuiTableRow: {
          ...theme?.overrides?.MuiTableRow,
          root: {
            backgroundColor: backgroundColors.paper,
          },
        },
        MuiTableCell: {
          ...theme?.overrides?.MuiTableCell,
          root: {
            ...theme?.overrides?.MuiTableCell?.root,
            borderBottom: "none",
          },
        },
      },
    });
};

export const makeDarkTheme = makeDarkThemeFactory();
