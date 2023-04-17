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

  const [projectName, setProjectName] = useState();
  const [features, setFeatures] = React.useState([]);
  const [descriptionTR, setDescriptionTR] = React.useState("11111");
  const [descriptionEN, setDescriptionEN] = React.useState("asdasdasdasdasd");
  const [fileList, setFileList] = useState([]);
  const [uploadPic, setUploadPic] = useState([]);

  const deleteImage = (id) => {
    var objIndex = uploadPic.findIndex((obj) => obj.id == id);
    uploadPic[objIndex] = { ...uploadPic[objIndex], isDelete: true };
  };

  const contextCopy = () => {
    setDescriptionEN(descriptionTR);
  };

  return (
    <SimpleCard>
      <Grid container spacing={2}>
        <Grid item xl={6} md={12} sm={12} xs={12}>
          <TextField
            placeholder="Project XXX"
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
                placeholder="Island landscape"
                {...params}
                variant="outlined"
                label="features"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginLeft: "3px", marginTop: "1px" }}
        >
          <Grid item xl={12} xs={12} md={12}>
            <TextEditor
              placeholder="Projemiz..."
              context={descriptionTR}
              setContext={setDescriptionTR}
              language={"tr"}
            />
          </Grid>
          <Grid item></Grid>
          <Grid item xl={12} xs={12} md={12}>
            <TextEditor
              placeholder="Our project..."
              context={descriptionEN}
              setContext={setDescriptionEN}
              language={"en"}
            >
              <Button onClick={() => contextCopy()} variant="text">
                Copy Turkish Content
              </Button>
            </TextEditor>
          </Grid>
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
