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

const folderName = "socialMedia";

export const addSocialMedia = async (socialMedia, username) => {
  try {
    console.log(socialMedia, username);

    await addDoc(collection(db, folderName), {
      socialMedia: socialMedia,
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
    const querySnapshot = await getDocs(collection(db, folderName));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        socialMedia: doc.data().socialMedia,
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
    await deleteDoc(doc(db, folderName, Id));
    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteSocialMedia", error.message);
  }
};

export const updateSocialMedia = async (id, username) => {
  try {
    const docRef = doc(db, "socialMedia", id);

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
