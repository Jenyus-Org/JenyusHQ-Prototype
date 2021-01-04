import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import React from "react";
import { Link, match, matchPath, useLocation } from "react-router-dom";
import "./App.css";
import { ReactComponent as JenyusLogo } from "./assets/Jenyus.svg";
import { theme } from "./theme";

interface LinkButton {
  url: string;
  icon: React.ReactNode;
  text: string;
}

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  cardTitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  logo: {
    width: theme.spacing(9) + 1,
    height: theme.spacing(9) + 1,
    fill: "white",
    stroke: "white",
    backgroundColor: theme.palette.primary.main,
    "& line, & text": {
      fill: "white",
      stroke: "white",
    },
  },
  logoContainer: {
    marginRight: 24,
    display: "inline-flex",
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.spacing(7),
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      height: 0,
    },
    overflow: "hidden",
  },
  desktopThemeToggle: {
    display: "inline-flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

interface LayoutProps {
  children?: React.ReactNode;
  darkTheme: boolean;
  toggleDarkTheme: () => void;
  links: LinkButton[];
}

function Layout({ children, darkTheme, toggleDarkTheme, links }: LayoutProps) {
  const classes = useStyles();
  const location = useLocation();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const activePath = React.useMemo(
    () =>
      links.reduce<match<{}> | null>(
        (active, link) =>
          active || (link && matchPath(location.pathname, link.url)),
        null
      ),
    [links, location]
  );

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar disableGutters>
          <Link to="/" className={classes.logoContainer}>
            <JenyusLogo className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title}>
            JenyusHQ
          </Typography>
          <Button color="inherit">
            <ExitToAppIcon />
          </Button>
          <Button
            color="inherit"
            onClick={toggleDarkTheme}
            className={classes.desktopThemeToggle}
          >
            {darkTheme ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerClose)}
        classes={{
          paper: classes.drawerClose,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {links.map((linkButton) => (
            <ListItem
              button
              key={linkButton.url}
              component={Link}
              to={linkButton.url}
              selected={linkButton.url === activePath?.url}
            >
              <ListItemIcon>{linkButton.icon}</ListItemIcon>
              <ListItemText primary={linkButton.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={toggleDarkTheme}>
            <ListItemIcon>
              {darkTheme ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
            </ListItemIcon>
            <ListItemText primary="Dark mode" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <div className={classes.bottomNav} />
      </main>
      <BottomNavigation
        value={activePath?.url}
        onChange={handleChange}
        className={classes.bottomNav}
      >
        {links.map((linkButton) => (
          <BottomNavigationAction
            key={linkButton.url}
            label={linkButton.text}
            value={linkButton.url}
            icon={linkButton.icon}
          />
        ))}
      </BottomNavigation>
    </>
  );
}

export default Layout;
