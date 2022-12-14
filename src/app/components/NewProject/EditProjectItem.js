import { Icon, Grid, TextField, Autocomplete, Button } from "@mui/material";
import { SimpleCard } from "app/components";
import DropFileInput from "../DropFileInput/DropFileInput";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import { addProject } from "../../firabase";
import { useNavigate } from "react-router-dom";

export default function EditProjectItem(id) {
  const handleSave = () => {
    const files = [];
    fileList.forEach((item) => files.push(item.name));
    const item = {
      projectName: projectName,
      features: features,
      description: description,
      files: files,
    };

    addProject(item);
    navigate("/");
  };
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [features, setFeatures] = React.useState();
  const [description, setDescription] = React.useState(
    '<h2 style="text-align: center;">asdasd and React!</h2>'
  );
  const [fileList, setFileList] = useState([]);

  return (
    <SimpleCard>
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
            value={features}
            onChange={(event, newValue) => {
              setFeatures(newValue);
            }}
            multiple
            id="tags-filled"
            options={featuresExample.map((option) => option.title)}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="features"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xl={12} xs={12} md={12}>
          <TextEditor context={description} setContext={setDescription} />
        </Grid>
      </Grid>
      <DropFileInput fileList={fileList} setFileList={setFileList} />

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button onClick={() => handleSave()} variant="contained">
          <Icon sx={{ mr: 4 }}>check</Icon>
          Save
        </Button>
      </Grid>
    </SimpleCard>
  );
}

const featuresExample = [
  { title: "Havalimanına yakın" },
  { title: "Hastaneye yakın" },
  { title: "Metrobüse yakın" },
  { title: "Marmaraya yakın" },
  { title: "Sahile yakın" },
  { title: "Adalar manzarası" },
  { title: "Tranvay" },
  { title: "AVM" },
];
