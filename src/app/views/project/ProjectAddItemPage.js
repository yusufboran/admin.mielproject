import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import NewProjectItem from "app/components/NewProject/NewProjectItem";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

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
        <NewProjectItem />
      </Box>
    </Container>
  );
};

export default ProjectItemPage;
