import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 1),
    background:
      theme.palette.type === "light"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  title: {
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    textAlign: "center",
  },
  title_1: {
    backgroundColor: theme.palette.type === "light" ? "#a8ff78" : "#0a742d",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #a8ff78, #78ffd6)"
        : "linear-gradient(to right, #0a742d 0%, rgba(106,187,20,1) 25%, rgba(9,124,16,1) 100%)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#a8ff78")
        : theme.palette.getContrastText("#0a742d"),
  },
  title_2: {
    backgroundColor:
      theme.palette.type === "light" ? "#f85032" : "rgb(196,36,36)",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #f85032, #e73827)"
        : "linear-gradient(to right, #c42424 16%, rgba(222,117,55,1) 32%, rgba(200,46,34,1) 80%)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#f85032")
        : theme.palette.getContrastText("#c42424"),
  },
  title_3: {
    backgroundColor: theme.palette.type === "light" ? "#2193b0" : "#020024",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #2193b0, #6dd5ed)"
        : "linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(18,18,66,1) 100%)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#2193b0")
        : theme.palette.getContrastText("#020024"),
  },
  kanban: {
    display: "flex",
    background:
      theme.palette.type === "light"
        ? theme.palette.background.default
        : theme.palette.background.paper,
    flexDirection: "column",
    padding: theme.spacing(0, 2),
    boxShadow: theme.palette.type === "dark" ? theme.shadows[2] : "none",
  },
  sections: {
    flexBasis: 0,
    flexGrow: 1,
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
      theme.palette.type === "light" ? "8px" : "0px",
    paddingBottom: theme.spacing(2),
    overflow: "hidden",
  },
  member: {
    flexBasis: 0,
    flexGrow: 1,
    overflowX: "auto",
    background: theme.palette.background.paper,
    padding: theme.spacing(0, 1),
  },
  task: {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius:
      theme.palette.type === "light" ? theme.shape.borderRadius : "0px",
  },
  purple: {
    background: "#915AFE",
  },
  blue: {
    background: "#35CDFB",
  },
  taskFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

interface KanbanProps {
  className?: string;
}

function Kanban({ className }: KanbanProps) {
  const classes = useStyles();

  const DummyTask = () => {
    const rand = React.useMemo(() => Math.random(), []);

    return (
      <Paper className={classes.task}>
        <Typography variant="h6">Title</Typography>
        <Typography variant="body2" color="textSecondary">
          Description.
        </Typography>
        <br />
        <div className={classes.taskFooter}>
          <Avatar className={rand > 0.5 ? classes.purple : classes.blue}>
            {rand > 0.5 ? "DB" : "RM"}
          </Avatar>
          <Typography variant="caption" color="textSecondary">
            01.01.2021
          </Typography>
        </div>
      </Paper>
    );
  };

  return (
    <Paper className={clsx(className, classes.kanban)}>
      <Paper square className={classes.header} elevation={0}>
        <Typography variant="h6">Kanban</Typography>
      </Paper>
      <Grid container spacing={2} className={classes.sections}>
        <Grid item xs={4} className={classes.sectionContainer}>
          <Paper className={classes.section} square>
            <Paper className={clsx(classes.title, classes.title_1)} square>
              To Do
            </Paper>
            <Paper square className={classes.member} elevation={0}>
              <DummyTask />
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.sectionContainer}>
          <Paper className={classes.section} square>
            <Paper className={clsx(classes.title, classes.title_2)} square>
              In Progress
            </Paper>
            <Paper square className={classes.member} elevation={0}>
              <DummyTask />
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.sectionContainer}>
          <Paper className={classes.section} square>
            <Paper className={clsx(classes.title, classes.title_3)} square>
              Done
            </Paper>
            <Paper square className={classes.member} elevation={0}>
              <DummyTask />
              <DummyTask />
              <DummyTask />
              <DummyTask />
              <DummyTask />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Kanban;
