import { Icon, IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { updateItemId } from "app/db/feature";
import React from "react";
import DropBox from "../DropBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEdit({ item }) {
  const id = item.id;
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(item.title || "");
  const [trtext, setTrText] = React.useState(item.trtext || "");
  const [entext, setEnText] = React.useState(item.entext || "");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleSave() {
    console.log(item);
    const item = {
      id: id,
      title: title,
      trtext: trtext,
      entext: entext,
    };
    updateItemId(item);

    setTitle("");
    setEnText("");
    setTrText("");
    setOpen(false);
  }

  const List = [
    { id: 1, title: "Expert Advisors" },
    {
      id: 2,
      title: "Targeted Projects",
    },
    {
      id: 3,
      title: "Support After Sale",
    },
  ];

  return (
    <div>
      <IconButton onClick={() => handleClickOpen()} edge="end" aria-label="add">
        <Icon color="primary">edit</Icon>
      </IconButton>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Features Add</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <DropBox selectItem={title} setSelectItem={setTitle} List={List} />
            <TextField
              sx={{ minWidth: 120, marginBottom: 2 }}
              value={trtext}
              onChange={(e) => setTrText(e.target.value)}
              fullWidth
              id="outlined-multiline-static"
              label="Lütfen Türkçe metin giriniz"
              multiline
              rows={4}
            />
            <TextField
              sx={{ minWidth: 120, marginBottom: 2 }}
              fullWidth
              value={entext}
              onChange={(e) => setEnText(e.target.value)}
              id="outlined-multiline-static"
              label="Please enter English text"
              multiline
              rows={4}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
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
