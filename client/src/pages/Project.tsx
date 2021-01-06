import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Kanban from "../components/kanban/Kanban";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "250px",
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },
  overview: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    height: `calc(100% - ${theme.spacing(14)}px)`,
    padding: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  kanban: {
    flexGrow: 1,
    height: "60vh",
  },
}));

function Project() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <Kanban className={classes.kanban} />
      <div className={classes.sidebar} />
      <Paper className={clsx(classes.overview, classes.sidebar)}>
        <Typography variant="h4">Project Title</Typography>
        <br />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Open Tasks</Typography>
            <Typography variant="body1">5</Typography>
            <Typography variant="subtitle2">In Progress</Typography>
            <Typography variant="body1">2</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Closed Tasks</Typography>
            <Typography variant="body1">3</Typography>
            <Typography variant="subtitle2">Total Time Spent</Typography>
            <Typography variant="body1">4h</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Project;
