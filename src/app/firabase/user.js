import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./index.js";
import toast from "react-hot-toast";

export const forgotPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      // ..
    });
    toast.success("Successfully");
  } catch (error) {
    toast.error("forgotPassword", error.message);
  }
};
