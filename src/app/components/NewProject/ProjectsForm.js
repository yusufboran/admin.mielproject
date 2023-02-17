import { Icon, Grid, TextField, Autocomplete, Button } from "@mui/material";
import { SimpleCard } from "app/components";
import DropFileInput from "../DropFileInput/DropFileInput";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProjectContext } from "app/App";
import { useContext } from "react";
import FileImage from "./FileImage";

export default function NewProjectItem({ func, id }) {
  const items = useContext(ProjectContext);
  const handleSave = () => {
    const item = {
      projectName: projectName,
      features: features,
      descriptionTR: descriptionTR,
      descriptionEN: descriptionEN,
    };

    func(fileList, item, uploadPic);
    navigate("/");
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
            setUploadPic(item.paths);
          }
        });
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
  const [uploadPic, setUploadPic] = useState([]);

  const deleteImage = (id) => {
    var objIndex = uploadPic.findIndex((obj) => obj.id == id);
    uploadPic[objIndex] = { ...uploadPic[objIndex], isDelete: true };
  };

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

      <Grid spacing={2} container>
        {uploadPic.map((item) => {
          if (!item.isDelete)
            return (
              <Grid item xl={3} md={4} sm={6} xs={12}>
                <FileImage item={item} deleteImage={deleteImage} />
              </Grid>
            );
        })}
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
