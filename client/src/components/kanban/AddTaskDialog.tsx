import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React from "react";

interface AddTaskDialogProps extends DialogProps {
  handleClose: () => void;
  handleAdd: (title: string, description: string) => void;
  status: string;
}

function AddTaskDialog({
  status,
  handleClose,
  handleAdd,
  ...props
}: AddTaskDialogProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <Dialog {...props} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        Add Task to {status}:
      </DialogTitle>
      <form onSubmit={() => handleAdd(title, description)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus type="submit">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddTaskDialog;
