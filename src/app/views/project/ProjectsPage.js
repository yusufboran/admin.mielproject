import { Box, Grid, Paper, styled, TextField } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ProjectItem from "./ProjectItem";
import { getProjectsList, deleteProjectsId } from "../../../firebase";
import React, { useEffect, useState } from "react";
import TabButton from "app/components/MatxLayout/Layout1/TabButton";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProjectsPage = () => {
  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    getProjectsList(setItems);
  }
  const handleDelete = (id) => {
    deleteProjectsId(id);
    getItem();
  };

  const [items, setItems] = useState([]);
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"domain"}
          routeSegments={[{ name: "Project", path: "/projects" }]}
        />
      </Box>
      <SimpleCard>
        <Grid container spacing={2}>
          {items.map((item) => {
            return (
              <Grid item xl={6} md={12} sm={12} xs={12}>
                <ProjectItem item={item} />
              </Grid>
            );
          })}
        </Grid>
      </SimpleCard>
      <TabButton  />
    </Container>
  );
};

export default ProjectsPage;
