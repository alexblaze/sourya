import Axios from "axios";
import { getUser, removeUser } from "../utils/cookieHelper";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  timeout: 20000,
});

//add token to all request
axiosInstance.interceptors.request.use(function (config) {
  const { token } = getUser();
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (
      (error.response &&
        error.response.data.message === "invalid_or_missing_token") ||
      (error.response && error.response.data.message === "user_disabled")
    ) {
      removeUser();
      window.location.replace("/");
    } else if (error.response && error.response.data) {
      if (error.response.data.message) {
        const message = error.response.data.message;
        return Promise.reject({ message });
      } else return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        message: "Some unusual error occured, please try again",
      });
    }
  }
);
