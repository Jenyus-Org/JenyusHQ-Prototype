import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import AddTaskDialog from "./AddTaskDialog";

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.subtitle1,
    padding: theme.spacing(1, 1, 1, 3),
    textAlign: "center",
    borderRadius:
      theme.palette.type === "light" ? "0px" : theme.shape.borderRadius,
    margin: theme.palette.type === "light" ? "0" : theme.spacing(0, 1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionContainer: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  section: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.palette.type === "light" ? theme.shadows[2] : "none",
    borderRadius:
      theme.palette.type === "light" ? theme.shape.borderRadius : "0px",
    paddingBottom: theme.spacing(2),
    overflow: "hidden",
  },
  member: {
    flexBasis: 0,
    flexGrow: 1,
    overflowX: "auto",
    background: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 1),
    marginTop: theme.spacing(1),
  },
}));

interface ColumnProps {
  className?: string;
  status: string;
  children: React.ReactNode;
  addTask: (status: string, title: string, description: string) => void;
}

function Column({ className, status, children, addTask }: ColumnProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (title: string, description: string) => {
    setOpen(false);
    addTask(status, title, description);
  };

  return (
    <>
      <Grid item xs={4} className={classes.sectionContainer}>
        <Paper className={classes.section} square>
          <Paper
            className={clsx(classes.title, className)}
            square
            elevation={0}
          >
            <p>{status}</p>
            <IconButton onClick={handleClickOpen} color="inherit">
              <PlaylistAdd fontSize="small" />
            </IconButton>
          </Paper>
          <Paper square className={classes.member} elevation={0}>
            {children}
          </Paper>
        </Paper>
      </Grid>
      <AddTaskDialog
        status={status}
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        handleClose={handleClose}
        handleAdd={handleAdd}
      />
    </>
  );
}

export default Column;
