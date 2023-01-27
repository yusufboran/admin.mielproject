import axios from "axios";
import { toast } from "react-hot-toast";

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
var url = process.env.REACT_APP_DATABASE_URL;
var userToken = null;

if (window.localStorage.getItem("userData"))
  userToken = JSON.parse(window.localStorage.getItem("userData")).accessToken;

export const addProject = async (fileList, item) => {
  try {
    var paths = [];
    var filesArr = [];

    var now = Date.now();
    fileList.forEach((file) => {
      var fileName = deleteTurkishCharacters(
        item.projectName + "-" + now + "-" + file.name
      );
      const myNewFile = new File([file], fileName, { type: file.type });
      filesArr.push(myNewFile);
      paths.push(fileName);
    });
    item = { ...item, paths: paths, token: userToken };

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
      .post(`${url}/api/v1/project/upload`, formData, config)
      .then((response) => console.log("response.data", response.data));

    delete item.fileList;
    console.log(item);
    axios
      .post(`${url}/api/v1/project/`, item)
      .then((response) => console.log("response.data", response.data));

    toast.success("Successfully Project Add");
  } catch (error) {
    toast.error("addProject", error.message);
  }
};

export const getProjectsList = async (setItems) => {
  try {
    axios
      .get(`${url}/api/v1/project/`)
      .then((response) =>
        console.log("response.data", setItems(response.data))
      );
  } catch (error) {
    toast.error("getProjectsList", error.message);
  }
};

export const deleteProjectsId = async (Id) => {
  try {
    axios.delete(`${url}/api/v1/project/`, {
      data: {
        id: Id,
        token: userToken,
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteConsultansId", error.message);
  }
};

export const updateProjectId = async (id, item) => {
  try {
  } catch (error) {
    toast.error("updateProjectId", error.message);
  }
};
