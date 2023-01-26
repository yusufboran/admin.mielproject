import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  uploadBytesResumable,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4iGWSLSOdBXG6q72J_uDo-i5VGBrLSro",
  authDomain: "mielproje.firebaseapp.com",
  projectId: "mielproje",
  storageBucket: "mielproje.appspot.com",
  messagingSenderId: "850541188172",
  appId: "1:850541188172:web:4c19c6afe35d42f03c90e9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export const consultansAdd = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "consultans"), item);

    toast.success("Successfully Consultants Add" + docRef.id);
  } catch (error) {
    toast.error("consultansAdd", error.message);
  }
};

export const getConsultansList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "consultans"));

    querySnapshot.forEach((doc) => {
      if (
        doc.data()["firstName"] !== null &&
        doc.data()["firstName"] !== undefined
      ) {
        const item = {
          id: doc.id,
          firstName: doc.data()["firstName"],
          lastName: doc.data()["lastName"],
          phoneNumber: doc.data()["phoneNumber"],
          imgUrl: doc.data()["file"],
          email: doc.data()["email"],
          startDate: doc.data()["startDate"],
        };
        items.push(item);
      }
    });

    setItems(items);
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const deleteConsultansId = async (Id) => {
  try {
    await deleteDoc(doc(db, "consultans", Id));
    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteConsultansId", error.message);
  }
};

export const updateConsultansId = async (id, item) => {
  try {
    const docRef = doc(db, "consultans", id);

    updateDoc(docRef, item)
      .then((docRef) => {
        toast.success("Update Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    toast.error("updateConsultansId", error.message);
  }
};

export const getConsultansId = async (id, setState, setFile) => {
  try {
    const docRef = doc(db, "consultans", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setState({
        firstName: docSnap.data().firstName,
        lastName: docSnap.data().lastName,
        email: docSnap.data().email,
        phoneNumber: docSnap.data().phoneNumber,
        date: docSnap.data().date,
        path: docSnap.data().path,
        imgUrl: docSnap.data().file,
      });
      setFile([
        {
          lastModified: 1670758416076,
          lastModifiedDate: new Date(),
          name: docSnap.data().path.split("/")[2],
          size: 232877,
          type: "image/jpeg",
        },
      ]);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    toast.error("getConsultansId", error.message);
  }
};

export const fileUpload = async (file, item) => {
  try {
    const metadata = {
      contentType: "image/jpeg",
    };
    const url =
      "/person/images/" +
      item.firstName +
      "-" +
      item.lastName +
      "-" +
      Date.now();
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const value = { ...item, file: downloadURL, path: url };
        consultansAdd(value);
      });
    });

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  } catch (error) {
    toast.error("fileUpload", error.message);
  }
};

export const fileUpdate = async (file, item, id) => {
  try {
    const metadata = {
      contentType: "image/jpeg",
    };
    var url =
      "/consultans/personImage/" + item.firstName + item.lastName + Date.now();
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",

      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const value = { ...item, file: downloadURL, path: url };
          updateConsultansId(id, value);
        });
      }
    );

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  } catch (error) {
    toast.error("fileUpload", error.message);
  }
};

export const fileDelete = async (url) => {
  try {
    const desertRef = ref(storage, url);

    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  } catch (error) {
    toast.error("fileDelete", error.message);
  }
};
