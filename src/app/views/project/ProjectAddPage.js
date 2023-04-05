import { Box, Grid, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectsForm from "app/components/NewProject/ProjectsForm";
import { addProject } from "app/db/project";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const handleSumbit = (fileList, item) => {
  addProject(fileList, item);
};

const ProjectItemPage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"domain"}
          routeSegments={[
            { name: "Project", path: "/projects" },
            { name: "Add", path: "/projects/add" },
          ]}
        />
        <Grid container style={{ marginTop: 0 }}>
          <ProjectsForm func={handleSumbit} />
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectItemPage;
