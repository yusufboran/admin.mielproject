import axios from "axios";
import { toast } from "react-hot-toast";

export const dbLogout = async () => {
  // LOGOUT
};

export const dbLogin = async (email, password) => {
  try {
    var user = await axios.post("http://localhost:3000/api/v1/auth/login", {
      username: email,
      password: password,
    });

    console.log(user);

    if (user.data.token) {
      toast.success("Successfully!");
      return user.data;
    }
  } catch (error) {
    toast.error("Login", error.message);
  }
};
