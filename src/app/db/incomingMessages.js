import toast from "react-hot-toast";
import axios from "axios";

var url = process.env.REACT_APP_DATABASE_URL;

var path = `${url}/api/v1/contactform`;

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

export const getItemsList = async (setItems) => {
  try {
    axios.get(path).then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("message getItemsList", error.message);
  }
};

export const deleteItemId = async (items) => {
  try {
    console.log(items);
    items.forEach((item) => {
      axios.delete(path, {
        data: {
          id: item.id,
          token: userToken,
        },
      });
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteItemId", error.message);
  }
};
