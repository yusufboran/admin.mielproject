import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectsForm from "app/components/NewProject/ProjectsForm";
import { updateProjectId } from "app/db/project";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProjectEditPage = () => {
  var url = window.location.href.split("/");
  var projectId = url[url.length - 1];

  const updateConsultant = (fileList, item, uploadPic) => {
    updateProjectId(projectId, item, fileList, uploadPic);
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"domain"}
          routeSegments={[
            { name: "Project", path: "/projects" },
            { name: "Edit", path: "/projects/add" },
          ]}
        />
        <Grid container style={{ marginTop: 0 }}>
          <ProjectsForm func={updateConsultant} id={projectId} />
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectEditPage;
