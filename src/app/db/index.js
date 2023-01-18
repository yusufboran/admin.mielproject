import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
import axios from "axios";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId:process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDqE8vPtV2iv4RbId_aAIpEUcK8jGL_Vwk",
  authDomain: "denemepersembe.firebaseapp.com",
  projectId: "denemepersembe",
  storageBucket: "denemepersembe.appspot.com",
  messagingSenderId: "323155737862",
  appId: "1:323155737862:web:068d57388f71dcb7d7b287",
  measurementId: "G-KXH1VQG8CT",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export const firebaseLogout = async () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

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

export const updateProjectId = async (id, item) => {
  try {
    const docRef = doc(db, "projects", id);

    updateDoc(docRef, item)
      .then((docRef) => {
        toast.success("Update Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    toast.error("updateProjectId", error.message);
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

export const getProjectId = async (
  id,
  setProjectName,
  setFeatures,
  setDescriptionTR,
  setDescriptionEN,
  setFileList
) => {
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProjectName(docSnap.data().projectName);
      setFeatures(docSnap.data().features);
      setDescriptionTR(docSnap.data().descriptionTR);
      setDescriptionEN(docSnap.data().descriptionEN);

      var files = [];
      docSnap.data().path.map((item) => {
        var File = {
          lastModified: 1670758416076,
          lastModifiedDate: new Date(),
          name: item,
          size: 232877,
          type: "image/jpeg",
          webkitRelativePath: "",
        };
        files.push(File);
      });

      setFileList(files);
      console.log(files);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    toast.error("getConsultansId", error.message);
  }
};
export const addProject = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "projects"), item);
    toast.success("Successfully Project Add" + docRef.id);
  } catch (error) {
    toast.error("addProject", error.message);
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
        descriptionEN: doc.data()["descriptionEN"],
        descriptionTR: doc.data()["descriptionTR"],
        features: doc.data()["features"],
        files: doc.data()["files"],
        path: doc.data()["path"],
        updateDate: 1669277071387,
      };

      items.push(item);
    });
    console.log(items);

    setItems(items);
  } catch (error) {
    toast.error("getProjectsList", error.message);
  }
};

export const deleteProjectsId = async (Id) => {
  try {
    axios.delete("http://localhost:3000/api/v1/project/", {
      data: {
        id: Id,
      },
    });

    toast.success("Delete Successfully");
  } catch (error) {
    toast.error("deleteConsultansId", error.message);
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

export const projectFilesUpload = async (files, item) => {
  try {
    const arr = [];
    const arrPath = [];
    const metadata = {
      contentType: "image/jpeg",
    };
    var counter = 0;
    var flag = files.length;

    files.forEach((file) => {
      var imgPath = `projects/${item.projectName}/${file.name}'`;
      arrPath.push(imgPath);
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, imgPath);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("getDownloadURL 320 ", downloadURL);
            arr.push(downloadURL);
            counter++;
            if (counter === flag) {
              item = { ...item, files: arr, path: arrPath };

              addProject(item);
            }
          });
        }
      );

      uploadBytes(storageRef, file);
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

export const getFile = async (url) => {
  try {
    await getDownloadURL(ref(storage, url)).then((url) => {
      return url;
    });
  } catch (error) {
    toast.error("getFile", error.message);
  }
};

export default app;