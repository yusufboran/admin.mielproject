import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField, Button } from "@mui/material";
import { FormGroup, withStyles } from "@material-ui/core";

export default function SelectTextField({
  sosicalMedia,
  setSosicalMedia,
  username,
  setUsername,
}) {
  const StyledButton = withStyles({
    root: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,

      textTransform: "lowercase",
    },
  })(Button);

  const List = [
    { id: 1, title: "twitter" },
    {
      id: 2,
      title: "facebook",
    },
    {
      id: 3,
      title: "linkedin",
    },
    {
      id: 4,
      title: "instagram",
    },
  ];
  return (
    <div>
      <FormControl sx={{ minWidth: 200, backgroundColor: "primary",marginY:20 }}>
        <InputLabel id="demo-simple-select-label">
          Select Social Media
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sosicalMedia}
          label="Social Media"
          onChange={(e) => setSosicalMedia(e.target.value)}
        >
          {List.map((item) => {
            return <MenuItem value={item.title}>{item.title}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <FormGroup row>
        <StyledButton variant="contained" disableElevation>
          {sosicalMedia ? "www." + sosicalMedia + ".com/" : "www.example.com/"}
        </StyledButton>

        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
    </div>
  );
}
