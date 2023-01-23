import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./index";
import toast from "react-hot-toast";
import axios from "axios";

const folderName = "message";

var path = "http://localhost:3000/api/v1/contactform";

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
    items.map(async (item) => {
      await deleteDoc(doc(db, folderName, item.id));
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteItemId", error.message);
  }
};
