import toast from "react-hot-toast";
import axios from "axios";

const folderName = "locations";

const userToken = JSON.parse(
  window.localStorage.getItem("userData")
).accessToken;

var url = process.env.REACT_APP_DATABASE_URL;


var path = `https://mielproje.com.tr/api/map.php`;

export const addItem = async (item) => {
  try {
    var location = [item.location.split(",")[0], item.location.split(",")[1]];
    delete item.localion;
    delete item.date;

    item = {
      ...item,
      location,
      token: userToken,
      method: "post",
    };
    console.log(item);
    await axios.post(path, item).then((responce) => {
      console.log(responce.data);
    });
  } catch (error) {
    toast.error(folderName, " addItem ", error.message);
  }
};

export const getItemsList = async (setItems) => {
  try {
    axios.get(path).then((response) => setItems(response.data));
  } catch (error) {
    toast.error("locations getItemsList", error.message);
  }
};

export const deleteItemId = async (Id) => {
  try {
    axios
      .delete(path, {
        data: {
          id: Id,
          token: userToken,
        },
      })
      .then((response) => console.log(response));

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateItemId = async (item) => {
  try {
    var location = [
      item.location.split(",")[0].replace("{", ""),
      item.location.split(",")[1].replace("}", ""),
    ];

    item = { ...item, token: userToken, location: location };
    axios.put(path, item).then((response) => console.log(response.data));
    console.log(item);
    toast.success("Successfully");

    var location = [
      Number(item["location"].slice(1, -1).split(",")[0]),
      Number(item["location"].slice(1, -1).split(",")[1]),
    ];
  } catch (error) {
    toast.error("locations updateItemId", error.message);
  }
};
