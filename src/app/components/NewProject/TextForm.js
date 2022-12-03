import { Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TextForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={6} md={12} sm={12}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xl={6} md={12} sm={12}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </Grid>

      <Grid item xl={6} xs={12} md={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default TextForm;
