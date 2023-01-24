import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectsForm from "app/components/NewProject/ProjectsForm";
import { projectFilesUpload } from "app/db";
import { addProject } from "app/db/project";
import axios from "axios";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));



const handleSumbit = (fileList, item) => {
  addProject(fileList, item)
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
        <ProjectsForm func={handleSumbit} />
      </Box>
    </Container>
  );
};

export default ProjectItemPage;
