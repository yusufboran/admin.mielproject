import axios from "axios";
import { toast } from "react-hot-toast";

export function deleteTurkishCharacters(text) {
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

export const getProjectsList = async (setItems) => {
  try {
    axios.get(`https://mielproje.com.tr/api/project.php`).then((response) => {
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getProjectsList", error.message);
  }
};

export const deleteProjectsId = async (Id) => {
  try {
    axios
      .delete(`https://mielproje.com.tr/api/project.php`, {
        data: {
          id: Id,
          token: userToken,
        },
      })
      .then((res) => {
        console.log(res.data);
      });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteConsultansId", error.message);
  }
};

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
      formData.append(`images[]`, filesArr[i]);
    }

    axios
      .post(`https://mielproje.com.tr/api/upload.php/`, formData, config)
      .then((res) => {
        console.log(res.data);
      });

    delete item.fileList;
    for (let prop in item) {
      if (typeof item[prop] === "string") {
        item[prop] = item[prop].replace("'", "''");
      }
      if (prop == "features") {
        item["features"].forEach((feature, index) => {
          item.features[index] = feature.replace("'", "''");
        });
      }
    }
    axios
      .post(`https://mielproje.com.tr/api/project.php/`, item)
      .then((res) => {
        console.log(res.data);
      });

    console.log("Upload ", item);

    toast.success("Successfully Project Add");
  } catch (error) {
    toast.error("addProject", error.message);
  }
};

export const updateProjectId = async (id, item, fileList, uploadPic) => {
  try {
    var paths = [];

    if (fileList.length > 0) {
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

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      for (let i = 0; i < filesArr.length; i++) {
        formData.append(`images[]`, filesArr[i]);
      }

      axios
        .post(`https://mielproje.com.tr/api/upload.php`, formData, config)
        .then((response) => {
          console.log(response.data);
        });
    }
    var images = [];
    uploadPic.forEach((img) => {
      if (img.isDelete) {
        images.push(img.id);
        console.log(images);
      }
    });
    item = {
      ...item,
      pid: id,
      token: userToken,
      paths: paths,
      deleteImg: images,
    };
    console.log(item);
    axios
      .put(`https://mielproje.com.tr/api/project.php/`, item)
      .then((response) => {
        console.log(response.data);
      });
    toast.success("Successfully Project Update");
  } catch (error) {
    toast.error("updateProjectId", error.message);
  }
};
