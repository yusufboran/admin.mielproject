import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import SelectTextField from "../SelectTextField";
import { addSocialMedia } from "../../firabase/other";
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
        Use Google's location service?
      </DialogTitle>

      <DialogContent>
        <SelectTextField
          sosicalMedia={sosicalMedia}
          setSosicalMedia={setSosicalMedia}
          username={username}
          setUsername={setUsername}
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
