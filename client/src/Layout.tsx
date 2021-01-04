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
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import RestoreIcon from "@material-ui/icons/Restore";
import clsx from "clsx";
import React from "react";
import "./App.css";
import { ReactComponent as JenyusLogo } from "./assets/Jenyus.svg";
import { theme } from "./theme";

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
    marginRight: 24,
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
}

function Layout({ children, darkTheme, toggleDarkTheme }: LayoutProps) {
  const classes = useStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar disableGutters>
          <JenyusLogo className={classes.logo} />
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
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
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
        value={value}
        onChange={handleChange}
        className={classes.bottomNav}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </>
  );
}

export default Layout;
