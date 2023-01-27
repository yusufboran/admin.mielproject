import axios from "axios";
import { toast } from "react-hot-toast";

export const dbLogout = async () => {
  // LOGOUT
};

var url = process.env.REACT_APP_DATABASE_URL;

export const dbLogin = async (email, password) => {
  try {
    var user = await axios.post(`${url}/api/v1/auth/login`, {
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
