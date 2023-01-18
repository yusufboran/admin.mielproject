import React from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import { useLocation } from "react-router-dom";
import ProjectsForm from "app/components/NewProject/ProjectsForm";
import { updateProjectId } from "app/db";

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
  console.log(projectId);

  const updateConsultant = (itefileList, item) => {
    updateProjectId(projectId, item);
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
        <ProjectsForm func={updateConsultant} id={projectId} />
      </Box>
    </Container>
  );
};

export default ProjectEditPage;
