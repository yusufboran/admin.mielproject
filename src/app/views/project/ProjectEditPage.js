import React from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProjectEditPage = () => {
  const projectId = new URLSearchParams(window.location.search).get("id");

  console.log(projectId);

  return (
    <Container>
      <Box className="breadcrumb">
      <Breadcrumb
          icon={"domain"}
          routeSegments={[{ name: "Project", path: "/projects" },{ name: "Edit", path: "/projects/add" }]}
        />
      </Box>

      {projectId}

    </Container>
  );
};

export default ProjectEditPage;
