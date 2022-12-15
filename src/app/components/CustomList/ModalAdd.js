import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import { addSocialMedia } from "../../firabase/socialMedia";
import DropBox from "./DropBox";
import UserTextfield from "./UserTextfield";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalAdd({ open, setOpen }) {
  const [socialMedia, setsocialMedia] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleClose() {
    setOpen(false);
  }

  function handleSave() {
    addSocialMedia(socialMedia, username);
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
        <DropBox selectItem={socialMedia} setSelectItem={setsocialMedia} />
        <UserTextfield
          username={username}
          setUsername={setUsername}
          socialMedia={socialMedia}
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
