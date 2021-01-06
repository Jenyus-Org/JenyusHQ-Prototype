import {
  Avatar,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

interface StyleProps {
  authorColor: string;
  isDragging: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  task: {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    borderRadius:
      theme.palette.type === "light" ? theme.shape.borderRadius : "0px",
    opacity: (props) => (props.isDragging ? 0 : 1),
    cursor: "move",
  },
  avatar: {
    background: (props) => props.authorColor,
  },
  taskFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export interface ITask {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  authorColor: string;
  status: string;
  index: number;
}

export interface TaskItem extends ITask {
  type: "card";
}

interface TaskProps {
  moveTask: (id: number, status: string, index: number) => void;
}

function Task({ moveTask, ...task }: TaskProps & ITask) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "card",
    hover(item: TaskItem) {
      if (!ref.current) {
        return;
      }

      if (item.id !== task.id) {
        moveTask(item.id, task.status, task.index);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { ...task, type: "card" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const classes = useStyles({ authorColor: task.authorColor, isDragging });

  return (
    <Paper className={classes.task} ref={ref}>
      <Typography variant="h6">{task.title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {task.description}
      </Typography>
      <br />
      <div className={classes.taskFooter}>
        <Avatar className={classes.avatar}>{task.author}</Avatar>
        <Typography variant="caption" color="textSecondary">
          {task.date}
        </Typography>
      </div>
    </Paper>
  );
}

export default Task;
