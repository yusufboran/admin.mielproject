import toast from "react-hot-toast";
import axios from "axios";

const folderName = "locations";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

var url = process.env.REACT_APP_DATABASE_URL;
var path = `${url}/api/v1/map`;

export const addItem = async (item) => {
  try {
    var location = [item.location.split(",")[0], item.location.split(",")[1]];
    delete item.localion;
    delete item.date;
    item = { ...item, files: location, location, token: userToken };
    axios.post(path, item);

    toast.success("Successfully");
  } catch (error) {
    toast.error(folderName, " addItem ", error.message);
  }
};

export const getItemsList = async (setItems) => {
  try {
    axios
      .get(path)
      .then((response) =>
      setItems(response.data)
      );
  } catch (error) {
    toast.error("locations getItemsList", error.message);
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
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateItemId = async (item) => {
  try {
    item = { ...item, token: userToken };
    axios.put(path, item);

    toast.success("Successfully");
  } catch (error) {
    toast.error("locations updateItemId", error.message);
  }
};
