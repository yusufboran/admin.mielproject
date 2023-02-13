import toast from "react-hot-toast";
import axios from "axios";
import { deleteTurkishCharacters } from "./project";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

var url = process.env.REACT_APP_DATABASE_URL;
var path = `${url}/api/v1/about`;

export const addItem = async (file, context, title) => {
  try {
    var now = Date.now();
    var fileName = deleteTurkishCharacters(title + "-" + now + "-" + file.name);
    const myNewFile = new File([file], fileName, { type: file.type });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("files", myNewFile);

    axios.post(`${url}/api/v1/project/upload`, formData, config);

    var item = {
      image_path: fileName,
      context: context,
      token: userToken,
      title: title,
    };
    axios.post(path, item);

    toast.success("Successfully");
  } catch (error) {
    toast.error(" addItem ", error.message);
  }
};

export const getItemsList = async (setHeader, setContent) => {
  try {
    axios.get(path).then((response) => {
      setHeader(response.data.find((item) => item.title === "header"));
      setContent(response.data.find((item) => item.title === "content"));
    });
  } catch (error) {
    toast.error("locations getItemsList", error.message);
  }
};
