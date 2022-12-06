import React from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import { useLocation } from "react-router-dom";
import EditProjectItem from "app/components/NewProject/EditProjectItem";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProjectEditPage = () => {
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get("id");

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
        <EditProjectItem id={projectId} />
      </Box>

      {projectId}
    </Container>
  );
};

export default ProjectEditPage;
