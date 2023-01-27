import toast from "react-hot-toast";
import axios from "axios";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

var url = process.env.REACT_APP_DATABASE_URL;

var path = `${url}/api/v1/features`;
export const addItem = async (item) => {
  try {
    item = { ...item, token: userToken };
    axios.post(path, item);

    toast.success("Successfully");
  } catch (error) {
    toast.error(" addItem ", error.message);
  }
};

export const getItemsList = async (setItems) => {
  try {
    axios
      .get(path)
      .then((response) =>
        console.log("response.data", setItems(response.data))
      );
  } catch (error) {
    toast.error("features getItemsList", error.message);
  }
};

export const deleteItemId = async (Id) => {
  try {
    axios.delete(path, {
      data: {
        id: Id,
        token: userToken,
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("features deleteItemId", error.message);
  }
};

export const updateItemId = async (item) => {
  try {
    item = { ...item, token: userToken };
    axios.put(path, item);
  } catch (error) {
    toast.error("features updateItemId", error.message);
  }
};
