import toast from "react-hot-toast";

export const forgotPassword = async (email) => {
  try {
    toast.success("Successfully");
  } catch (error) {
    toast.error("forgotPassword", error.message);
  }
};
