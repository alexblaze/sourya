import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { UserData } from "../types/types";

const COOKIE_NAME = "sourya";
const COOKIE_NAME_ANOTHER = "sourya-1";
const SECRET_KEY =
  import.meta.env.VITE_REACT_APP_SECRET_KEY || "default-secret-key";

export const setUser = (data: UserData) => {
  Cookies.set(
    COOKIE_NAME,
    CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString(),
    { expires: 3, secure: true }
  );
};

export const getUser = (): UserData | { token: string } => {
  const data = Cookies.get(COOKIE_NAME);
  if (data) {
    const decryptedData = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    );
    return JSON.parse(decryptedData) as UserData;
  }
  return { token: "" };
};

export const removeUser = () => {
  Cookies.remove(COOKIE_NAME);
  Cookies.remove(COOKIE_NAME_ANOTHER);
};
