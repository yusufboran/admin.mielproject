import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import { useEffect } from "react";
import { deleteSocialMedia, updateSocialMedia } from "app/db/socialMedia";
import UserTextfield from "./UserTextfield";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEdit({ open, setOpen, editItem }) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState();

  function handleClose() {
    setOpen(false);
  }

  function handleDelete() {
    deleteSocialMedia(editItem.id);
    setOpen(false);

    navigate("/");
  }
  function handleSave() {
    updateSocialMedia(editItem.id, username);
    setOpen(false);

    navigate("/");
  }

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
            socialMedia={editItem.socialMedia}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
