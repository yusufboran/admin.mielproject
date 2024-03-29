import { Box, Grid, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectItem from "./ProjectItem";
import React, { useContext } from "react";
import AddSpeedDialButton from "app/components/AddSpeedDialButton";
import { ProjectContext } from "app/App";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProjectsPage = () => {
  const items = useContext(ProjectContext);
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"domain"}
          routeSegments={[{ name: "Project", path: "/projects" }]}
        />
      </Box>
      <Grid spacing={2} container>
        {items.map((item) => {
          return (
            <Grid item xl={6} md={12} sm={12} xs={12}>
              <ProjectItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <AddSpeedDialButton path={"/projects/add"} />
    </Container>
  );
};

export default ProjectsPage;
