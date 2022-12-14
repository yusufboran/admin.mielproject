import { collection, addDoc, getDocs } from "firebase/firestore";
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
      console.log(doc.data());
      const item = {
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
