import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Icon } from "@mui/material";
import { Span } from "../Typography";
import { dbUserRegister } from "app/db/auth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddUSer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    dbUserRegister(state);
    handleClose();

    setState({
      method: "register",
      username: "username",
    });
  };

  const handleChange = (event) => {
    const { type, value } = event.target;
    setState({ ...state, [type]: value });
  };

  const [state, setState] = React.useState({
    method: "register",
    username: "username",
  });
  const { email, password } = state;

  return (
    <div>
      <Button onClick={handleOpen} color="primary" variant="contained">
        <Icon>person_add_alt_1</Icon>
        <Span sx={{ pl: 1, textTransform: "capitalize" }}>New User</Span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} class="d-grid gap-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                onChange={handleChange}
                value={email || ""}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                onChange={handleChange}
                value={password || ""}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
