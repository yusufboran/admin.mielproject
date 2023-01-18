import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectsForm from "app/components/NewProject/ProjectsForm";
import { projectFilesUpload } from "app/db";
import axios from "axios";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function deleteTurkishCharacters(text) {
  var trMap = {
    çÇ: "c",
    ğĞ: "g",
    şŞ: "s",
    üÜ: "u",
    ıİ: "i",
    öÖ: "o",
  };
  for (var key in trMap) {
    text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
  }
  return text
    .split(" ")
    .join("")
    .replace(/\s/gi, "-")
    .replace(/[-]+/gi, "-")
    .toLowerCase();
}

const handleSumbit = (fileList, item) => {
  var paths = [];
  var filesArr = [];
  var now = Date.now();
  fileList.map((file) => {
    var fileName = deleteTurkishCharacters(
      item.projectName + "-" + now + "-" + file.name
    );
    const myNewFile = new File([file], fileName, { type: file.type });
    filesArr.push(myNewFile);
    paths.push(fileName);
  });
  item = { ...item, paths: paths };

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const formData = new FormData();
  for (let i = 0; i < filesArr.length; i++) {
    formData.append("files", filesArr[i]);
  }

  axios
    .post("http://localhost:3000/api/v1/project/upload", formData, config)
    .then((response) => console.log("response.data", response.data));

  delete item.fileList;
  console.log(item);
  axios
    .post("http://localhost:3000/api/v1/project/", item)
    .then((response) => console.log("response.data", response.data));
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
