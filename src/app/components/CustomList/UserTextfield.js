import { withStyles } from "@material-ui/core";
import { Button, FormGroup, TextField } from "@mui/material";
import React from "react";

const StyledTextField = withStyles({
  root: {
    "& fieldset": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
})(TextField);
const StyledButton = withStyles({
  root: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    textTransform: "lowercase",
  },
})(Button);

export default function UserTextfield() {
  const [username, setUsername] = React.useState();

  return (
    <FormGroup row>
      <StyledButton variant="contained" disableElevation>
        @example.com
      </StyledButton>
      <StyledTextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        placeholder="username"
      />
      {username}
    </FormGroup>
  );
}
