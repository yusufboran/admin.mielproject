import toast from "react-hot-toast";
import axios from "axios";
import { deleteTurkishCharacters } from "./project";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

var path = `https://mielproje.com.tr/api/about.php`;

export const addItem = async (file, contextTr, contextEn, title) => {
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
    formData.append("images[]", myNewFile);

    axios
      .post(`https://mielproje.com.tr/api/upload.php`, formData, config)
      .then((response) => {
        console.log(response.data);
      });

    var item = {
      image_path: fileName,
      contextTr: contextTr,
      contextEn: contextEn,
      token: userToken,
      title: title,
    };
    console.log(item)
    axios.post(path, item).then((response) => {
      console.log(response.data);
    });

    toast.success("Successfully");
  } catch (error) {
    toast.error(" addItem ", error.message);
  }
};

export const getItemsList = async (setHeader, setContent) => {
  try {
    axios.get(path).then((response) => {
      console.log(response);
      setHeader(response.data.find((item) => item.title === "header"));
      setContent(response.data.find((item) => item.title === "content"));
    });
  } catch (error) {
    toast.error("locations getItemsList", error.message);
  }
};
