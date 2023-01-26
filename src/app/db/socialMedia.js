import toast from "react-hot-toast";
import axios from "axios";

var path = "http://localhost:3000/api/v1/socialmedia";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

export const addSocialMedia = async (item) => {
  try {
    item = { ...item, token: userToken };
    axios.post(path, item);
    toast.success("Successfully Social Media Item Add");
  } catch (error) {
    toast.error("addSocialMedia", error.message);
  }
};

export const getSocialMedia = async (setItems) => {
  try {
    axios
      .get(path)
      .then((response) =>
        console.log("response.data", setItems(response.data))
      );
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const deleteSocialMedia = async (Id) => {
  try {
    axios.delete(path, {
      data: {
        id: Id,
        token: userToken
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateSocialMedia = async (item) => {
  try {
    item = { ...item, token: userToken };
    axios.put(path, item);
  } catch (error) {
    toast.error("updateSocialMedia", error.message);
  }
};
