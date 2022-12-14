import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./index";
import toast from "react-hot-toast";

export const addSocialMedia = async (sosicalMedia, username) => {
  try {
    console.log("addSocialMedia", sosicalMedia, username);
    const docRef = await addDoc(collection(db, "socialMedia"), {
      sosicalMedia: sosicalMedia,
      username: username,
    });

    toast.success("Successfully Social Media Item Add");
  } catch (error) {
    toast.error("addSocialMedia", error.message);
  }
};

export const getSocialMedia = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "socialMedia"));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        sosicalMedia: doc.data().sosicalMedia,
        username: doc.data().username,
      };
      items.push(item);
    });

    setItems(items);
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const deleteSocialMedia = async (Id) => {
  try {
    await deleteDoc(doc(db, "socialMedia", Id));
    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};
