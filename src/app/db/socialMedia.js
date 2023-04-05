import toast from "react-hot-toast";
import axios from "axios";
var url = process.env.REACT_APP_DATABASE_URL;

var path = `http://mielproje.com.tr/api/social-media.php`;

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

export const addSocialMedia = async (item) => {
  try {
    item = { ...item, token: userToken };
    console.log(item);
    axios.post(path, item).then((response) => {
      console.log(response);
    });
    toast.success("Successfully Social Media Item Add");
  } catch (error) {
    toast.error("addSocialMedia", error.message);
  }
};

export const getSocialMedia = async (setItems) => {
  try {
    axios.get(path).then((response) => setItems(response.data));
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const deleteSocialMedia = async (Id) => {
  try {
    axios.delete(path, {
      data: {
        id: Id,
        token: userToken,
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateSocialMedia = async (item) => {
  try {
    axios.put(path, item).then((response) => {
      console.log(response);
    });
  } catch (error) {
    toast.error("updateSocialMedia", error.message);
  }
};
