import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4iGWSLSOdBXG6q72J_uDo-i5VGBrLSro",
  authDomain: "mielproje.firebaseapp.com",
  projectId: "mielproje",
  storageBucket: "mielproje.appspot.com",
  messagingSenderId: "850541188172",
  appId: "1:850541188172:web:4c19c6afe35d42f03c90e9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export const firebaseLogin = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Successfully!");

    return user;
  } catch (error) {
    toast.error("firebaseLogin", error.message);
  }
};
export const consultansAdd = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "consultans"), {
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      startDate: item.startDate,
      birthday: item.birthday,
      imgUrl: item.file,
    });

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
          imgUrl: doc.data()["imgUrl"],
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

export const updateConsultansId = async (Id, item) => {
  try {
    const docRef = doc(db, "consultans", Id);
    const data = {
      firstName: item.firstName,
      lastName: item.lastName,
      phoneNumber: item.phoneNumber,
      imgUrl: item.imgUrl,
      email: item.email,
      startDate: item.startDate,
    };

    updateDoc(docRef, data)
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

export const getConsultansId = async (
  Id,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setStartDate,
  setBirthday,
  setImgUrl
) => {
  try {
    const docRef = doc(db, "consultans", Id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFirstName(docSnap.data()["firstName"]);
      setLastName(docSnap.data()["lastName"]);
      setEmail(docSnap.data()["email"]);
      setPhoneNumber(docSnap.data()["phoneNumber"]);
      setStartDate(docSnap.data()["startDate"]);
      setBirthday(docSnap.data()["birthday"]);
      setImgUrl(docSnap.data()["imgUrl"]);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    toast.error("getConsultansId", error.message);
  }
};

export const addProject = async (item) => {
  try {
    console.log(item);

    const docRef = await addDoc(collection(db, "projects"), {
      projectName: item.projectName,
      features: item.features,
      description: item.description,
      files: item.files,
    });
    toast.success("Successfully Project Add" + docRef.id);
  } catch (error) {
    toast.error("ConsultansAdd", error.message);
  }
};

export const getProjectsList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "projects"));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        projectName: doc.data()["projectName"],
        description: doc.data()["description"],
        features: doc.data()["features"],
        files: doc.data()["files"],
        updateDate: 1669277071387,
      };

      items.push(item);
    });
    console.log(items);

    setItems(items);
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const deleteProjectsId = async (Id) => {
  try {
    await deleteDoc(doc(db, "projects", Id));
    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteConsultansId", error.message);
  }
};

export const fileUpload = async (file, url) => {
  try {
    const storageRef = ref(storage, url);
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

export default app;
