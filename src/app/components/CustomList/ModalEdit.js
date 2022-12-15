import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import { FormGroup, withStyles, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { deleteSocialMedia } from "app/firabase/other";
import { Icon, IconButton } from "@mui/material";
import UserTextfield from "./UserTextfield";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEdit({ open, setOpen, editItem }) {
  function handleClose() {
    setOpen(false);
  }
  console.log("editItem", editItem.sosicalMedia);

  function handleDelete() {
    deleteSocialMedia(editItem.id);
    setOpen(false);
  }
  const [username, setUsername] = React.useState();
  useEffect(() => {
    setUsername(editItem.username);
  }, [editItem]);
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Edit Social Media Item
        </DialogTitle>

        <DialogContent>
          <UserTextfield
            username={username}
            setUsername={setUsername}
            sosicalMedia={editItem.sosicalMedia}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
