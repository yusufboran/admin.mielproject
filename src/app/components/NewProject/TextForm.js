import { Grid, Paper, TextField, Autocomplete } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import DetailedExpansionPanel from "app/views/material-kit/expansion-panel/DetailedExpansionPanel";
import { useState } from "react";

const TextForm = () => {
  const [projectName, setProjectName] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xl={6} md={12} sm={12} xs={12}>
        <TextField
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xl={6} md={12} sm={12} xs={12}>
        <Autocomplete
          multiple
          id="tags-filled"
          options={features.map((option) => option.title)}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="freeSolo"
              placeholder="features"
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item xl={12} xs={12} md={12}>
        <DetailedExpansionPanel />
      </Grid>
    </Grid>
  );
};

export default TextForm;

const features = [
  { title: "Havalimanına yakın" },
  { title: "Hastaneye yakın" },
  { title: "Metrobüse yakın" },
  { title: "Marmaraya yakın" },
  { title: "Sahile yakın" },
  { title: "Adalar manzarası" },
  { title: "Tranvay" },
  { title: "AVM" },
];
