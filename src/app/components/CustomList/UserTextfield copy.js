import { Button, FormGroup, TextField, withStyles } from "@material-ui/core";
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

export default function UserTextfield({ username, setUsername, editItem }) {
  return (
    <FormGroup row>
      {editItem.sosicalMedia && (
        <StyledButton variant="contained" disableElevation>
          {editItem.sosicalMedia}
        </StyledButton>
      )}

      <StyledTextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        placeholder="username"
      />
    </FormGroup>
  );
}
