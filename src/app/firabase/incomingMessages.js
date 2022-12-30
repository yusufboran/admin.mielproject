import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./index";
import toast from "react-hot-toast";

const folderName = "message";

export const getItemsList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, folderName));
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        name: doc.data().name,
        phone: doc.data().phone,
        email: doc.data().email,
        message: doc.data().message,
        date: new Date(doc.data().date * 1000),
      };

      items.push(item);
    });

    setItems(items);
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
