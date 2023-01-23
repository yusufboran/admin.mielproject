import toast from "react-hot-toast";
import axios from "axios";

const folderName = "locations";

var path = "http://localhost:3000/api/v1/map";
export const addItem = async (item) => {
  try {
    var location = [item.location.split(",")[0], item.location.split(",")[1]];
    delete item.localion;
    delete item.date;
    item = { ...item, files: location, location };
    console.log(item);
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
        console.log("response.data", setItems(response.data))
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
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateItemId = async (item) => {
  try {
    axios.put(path, item);

    toast.success("Successfully");
  } catch (error) {
    toast.error("locations updateItemId", error.message);
  }
};
