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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StyledButton = withStyles({
  root: {
    fontSize: 14,
    textAlign: "right",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    textTransform: "lowercase",
  },
})(Button);

export default function ModalEdit({ open, setOpen, editItem }) {
  function handleClose() {
    setOpen(false);
  }

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
          Use Google's location service?
        </DialogTitle>

        <DialogContent>
          <FormGroup row>
            <StyledButton variant="contained" disableElevation>
              {editItem.sosicalMedia
                ? "www." + editItem.sosicalMedia + ".com/"
                : "www.example.com/"}
            </StyledButton>

            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
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
