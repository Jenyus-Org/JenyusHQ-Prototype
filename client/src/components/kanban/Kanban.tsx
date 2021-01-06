import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Column from "./Column";
import DropZone from "./DropZone";
import Task from "./Task";

const statuses = ["To Do", "In Progress", "Done"];

const defaultTasks = Array.from({ length: 9 }).map((_, index) => {
  const rand = Math.random();
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    status,
    index,
    id: index,
    title: "Title",
    description: "Description",
    date: "01.01.2020",
    author: rand > 0.5 ? "DM" : "RM",
    authorColor: rand > 0.5 ? "#915AFE" : "#35CDFB",
  };
});

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 1),
    background:
      theme.palette.type === "light"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  title_1: {
    backgroundColor: theme.palette.type === "light" ? "#a8ff78" : "#134e5e",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #a8ff78, #78ffd6)"
        : "linear-gradient(to right, #134e5e, #71b280)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#a8ff78")
        : theme.palette.getContrastText("#134e5e"),
  },
  title_2: {
    backgroundColor: theme.palette.type === "light" ? "#f85032" : "#333333",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #f85032, #e73827)"
        : "linear-gradient(to right, #333333, #dd1818)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#f85032")
        : theme.palette.getContrastText("#333333"),
  },
  title_3: {
    backgroundColor: theme.palette.type === "light" ? "#2193b0" : "#373b44",
    background:
      theme.palette.type === "light"
        ? "linear-gradient(to right, #2193b0, #6dd5ed)"
        : "linear-gradient(to right, #373b44, #4286f4)",
    color:
      theme.palette.type === "light"
        ? theme.palette.getContrastText("#2193b0")
        : theme.palette.getContrastText("#373b44"),
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
  },
}));

interface KanbanProps {
  className?: string;
}

function Kanban({ className }: KanbanProps) {
  const classes = useStyles();

  const [tasks, setTasks] = React.useState(defaultTasks);

  const setTaskStatus = React.useCallback(
    (id: number, status: string) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === id) {
            const index =
              Math.max(
                -1,
                ...tasks
                  .filter((task) => task.status === status)
                  .map((t) => t.index)
              ) + 1;
            return { ...task, status, index };
          }
          return task;
        })
      );
    },
    [setTasks]
  );

  const moveTask = React.useCallback(
    (id: number, status: string, index: number) => {
      setTasks((tasks) => {
        const task = tasks.find((t) => t.id === id);
        const oldIndex = task!.index;

        return tasks.map((task) => {
          if (task.id === id) {
            return { ...task, status, index };
          } else if (task.status === status && oldIndex > index) {
            if (task.index >= index) {
              return { ...task, index: task.index + 1 };
            }
          } else {
            if (task.index === index) {
              return { ...task, index: oldIndex };
            }
          }
          return task;
        });
      });
    },
    [setTasks]
  );

  const statusClasses = React.useMemo(
    () => [classes.title_1, classes.title_2, classes.title_3],
    [classes]
  );

  const addTask = React.useCallback(
    (status: string, title: string, description: string) => {
      setTasks((tasks) => {
        const rand = Math.random();
        const id = Math.max(-1, ...tasks.map((task) => task.id)) + 1;
        const index =
          Math.max(
            -1,
            ...tasks
              .filter((task) => task.status === status)
              .map((task) => task.index)
          ) + 1;

        return [
          ...tasks,
          {
            id,
            index,
            status,
            title,
            description,
            date: new Date().toLocaleDateString(),
            author: rand > 0.5 ? "DM" : "RM",
            authorColor: rand > 0.5 ? "#915AFE" : "#35CDFB",
          },
        ];
      });
    },
    [setTasks]
  );

  return (
    <Paper className={clsx(className, classes.kanban)}>
      <Paper square className={classes.header} elevation={0}>
        <Typography variant="h6">Kanban</Typography>
      </Paper>
      <Grid container spacing={2} className={classes.sections}>
        {statuses.map((status, index) => (
          <Column
            key={status}
            status={status}
            className={statusClasses[index]}
            addTask={addTask}
          >
            <>
              {tasks
                .filter((task) => task.status === status)
                .sort((task1, task2) => (task1.index < task2.index ? -1 : 1))
                .map((task) => (
                  <Task {...task} key={task.id} moveTask={moveTask} />
                ))}
              <DropZone status={status} setTaskStatus={setTaskStatus} />
            </>
          </Column>
        ))}
      </Grid>
    </Paper>
  );
}

export default Kanban;
