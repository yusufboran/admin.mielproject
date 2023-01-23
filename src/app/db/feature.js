import toast from "react-hot-toast";
import axios from "axios";

const folderName = "features";

var path = "http://localhost:3000/api/v1/features";
export const addItem = async (item) => {
  try {
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
    toast.error("features getItemsList", error.message);
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
    toast.error("features deleteItemId", error.message);
  }
};

export const updateItemId = async (item) => {
  try {
    console.log("Update Successfully", item);
    axios.put(path, item);
  } catch (error) {
    toast.error("features updateItemId", error.message);
  }
};
