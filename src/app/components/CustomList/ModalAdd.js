import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import { addSocialMedia } from "../../firabase/other";
import DropBox from "./DropBox";
import UserTextfield from "./UserTextfield";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalAdd({ open, setOpen }) {
  const [sosicalMedia, setSosicalMedia] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleClose() {
    setOpen(false);
  }

  function handleSave() {
    addSocialMedia(sosicalMedia, username);
    setOpen(false);
  }
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        New Social Media Platform
      </DialogTitle>

      <DialogContent>
        <DropBox selectItem={sosicalMedia} setSelectItem={setSosicalMedia} />
        <UserTextfield
          username={username}
          setUsername={setUsername}
          sosicalMedia={sosicalMedia}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
