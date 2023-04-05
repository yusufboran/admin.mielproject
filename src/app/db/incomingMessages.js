import toast from "react-hot-toast";
import axios from "axios";

var url = process.env.REACT_APP_DATABASE_URL;

var path = `https://mielproje.com.tr/api/contact.php`;

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

export const getItemsList = async (setItems) => {
  try {
    axios.get(path).then((response) => {
      setItems(response.data);
    });
  } catch (error) {
    toast.error("message getItemsList", error.message);
  }
};

export const deleteItemId = async (items) => {
  try {
    axios
      .delete(path, {
        deneme: true,
        ids: items.map((item) => item.id),
      }).then((respoence) => {
        console.log(respoence.data);
      });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteItemId", error.message);
  }
};
