import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDrop } from "react-dnd";
import { TaskItem } from "./Task";

const useStyles = makeStyles((theme) => ({
  dropZone: {
    flexGrow: 1,
  },
}));

interface DropZoneProps {
  status: string;
  setTaskStatus: (id: number, status: string) => void;
}

function DropZone({ status, setTaskStatus }: DropZoneProps) {
  const classes = useStyles();

  const ref = React.useRef(null);
  const [, drop] = useDrop<TaskItem, any, any>({
    accept: "card",
    drop(item) {
      setTaskStatus(item.id, status);
    },
  });
  drop(ref);

  return <div className={classes.dropZone} ref={ref}></div>;
}

export default DropZone;
