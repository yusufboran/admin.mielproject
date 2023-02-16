import { Icon, Grid, TextField, Autocomplete, Button } from "@mui/material";
import { SimpleCard } from "app/components";
import DropFileInput from "../DropFileInput/DropFileInput";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProjectContext } from "app/App";
import { useContext } from "react";

export default function NewProjectItem({ func, id }) {
  const items = useContext(ProjectContext);
  const handleSave = () => {
    const item = {
      projectName: projectName,
      features: features,
      descriptionTR: descriptionTR,
      descriptionEN: descriptionEN,
    };

    func(fileList, item);
    // navigate("/");
  };

  useEffect(() => {
    const getItem = () => {
      if (id) {
        items.forEach((item) => {
          if (item.pid === id) {
            setProjectName(item.projectname);
            setFeatures(item.features);
            setDescriptionTR(item.descriptiontr);
            setDescriptionEN(item.descriptionen);
          }
        });
        // getProjectId(
        //   setFileList
        // );
      }
    };

    getItem();
  }, []);

  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("deneme");
  const [features, setFeatures] = React.useState([
    featuresExample[0].title,
    featuresExample[1].title,
  ]);
  const [descriptionTR, setDescriptionTR] = React.useState(
    '<h2 style="text-align: center;">türkçe açıklama</h2>'
  );
  const [descriptionEN, setDescriptionEN] = React.useState(
    '<h2 style="text-align: center;">description english</h2>'
  );
  const [fileList, setFileList] = useState([]);

  return (
    <SimpleCard>
      <Grid container spacing={2}>
        <Grid item xl={6} md={12} sm={12} xs={12}>
          <TextField
            value={projectName || ""}
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
          <TextEditor
            context={descriptionTR}
            setContext={setDescriptionTR}
            language={"tr"}
          />
          <TextEditor
            context={descriptionEN}
            setContext={setDescriptionEN}
            language={"en"}
          />
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
