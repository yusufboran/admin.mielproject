import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./index";
import toast from "react-hot-toast";

const folderName = "features";

export const addItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, folderName), item);

    toast.success("Successfully");
  } catch (error) {
    toast.error(folderName, " addItem ", error.message);
  }
};

export const getItemsList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, folderName));
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        title: doc.data().title,
        trText: doc.data().trText,
        enText: doc.data().enText,
      };

      items.push(item);
    });

    setItems(items);
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const deleteItemId = async (Id) => {
  try {
    await deleteDoc(doc(db, folderName, Id));
    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateItemId = async (id, username) => {
  try {
    console.log(id);
    const docRef = doc(db, folderName, id);

    updateDoc(docRef, {
      username: username,
    })
      .then((docRef) => {
        toast.success("Update Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    toast.error("updateSocialMedia", error.message);
  }
};
