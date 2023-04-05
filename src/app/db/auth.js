import axios from "axios";
import { toast } from "react-hot-toast";

export const dbLogout = async () => {
  // LOGOUT
};

var path = `https://mielproje.com.tr/api/auth.php`;
var url = process.env.REACT_APP_DATABASE_URL;

export const dbLogin = async (email, password) => {
  try {
    var user = await axios.post(path, {
      email: email,
      password: password,
      method: "login",
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

export const dbUserUpdate = async (item) => {
  try {
    const token = JSON.parse(
      window.localStorage.getItem("userData")
    ).accessToken;
    const email = JSON.parse(window.localStorage.getItem("userData")).user
      .email;
    var result = await axios.put(path, {
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
