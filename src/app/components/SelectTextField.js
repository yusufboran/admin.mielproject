import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField } from "@mui/material";

export default function SelectTextField() {
  const [sosicalMedia, setSosicalMedia] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleChange = (e) => {
    console.log(e);
    setSosicalMedia(e.target.value);
  };

  const List = [
    { id: 1, title: "twitter", icon: "twitter_icon", link: "www.twitter.com/" },
    {
      id: 2,
      title: "facebook",
      icon: "facebook_icon",
      link: "www.facebook.com/",
    },
    {
      id: 3,
      title: "linkedin",
      icon: "twitter_icon",
      link: "www.linkedin.com/in/",
    },
    {
      id: 4,
      title: "instagram",
      icon: "twitter_icon",
      link: "www.instagram.com/",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Social Media</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sosicalMedia}
            label="Age"
            onChange={(e) => handleChange(e)}
          >
            {List.map((item) => {
              return (
                <MenuItem key={item.id} value={item}>
                  {item.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Link"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
