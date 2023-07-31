import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { UserData } from "../types/types";

const COOKIE_NAME = "sourya";
const COOKIE_NAME_ANOTHER = "sourya-1";
const SECRET_KEY =
  import.meta.env.VITE_REACT_APP_SECRET_KEY || "default-secret-key";
export const setUser = (data: UserData) => {
  console.log("🚀 ~ file: cookieHelper.ts:10 ~ setUser ~ data:", data);
  Cookies.set(
    COOKIE_NAME,
    CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY),
    { expires: 3, secure: true }
  );
};

export const getUser = () => {
  const data = Cookies.get(COOKIE_NAME);
  if (data) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    );
  }
  return { token: "" };
};

export const removeUser = () => {
  Cookies.remove(COOKIE_NAME);
  Cookies.remove(COOKIE_NAME_ANOTHER);
};
