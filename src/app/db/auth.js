import axios from "axios";
import { toast } from "react-hot-toast";

export const dbLogout = async () => {
  // LOGOUT
};

var url = process.env.REACT_APP_DATABASE_URL;

export const dbLogin = async (email, password) => {
  try {
    var user = await axios.post(`${url}/api/v1/auth/login`, {
      email: email,
      password: password,
    });

    if (user.data.token) {
      toast.success("Successfully!");
      return user.data;
    }
  } catch (error) {
    toast.error("Login", error.message);
  }
};

export const dbUserUpdate = async (item) => {
  try {
    const token = JSON.parse(
      window.localStorage.getItem("userData")
    ).accessToken;
    const email = JSON.parse(window.localStorage.getItem("userData")).user
      .email;
    var result = await axios.put(`${url}/api/v1/auth`, {
      token: token,
      email: email,

      newEmail: item.email,
      oldpassword: item.oldpassword,
      newpassword: item.password,
      username: item.username,
    });
    toast.success("Successfully!");
  } catch (error) {
    toast.error("Updata", error.message);
  }
};
