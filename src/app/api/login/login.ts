import { AxiosResponse } from "axios"; // Import AxiosResponse type
import { axiosInstance } from "../axiosInterceptor";
import { LoginType, UserData } from "../../types/types";

// Update the function signature with types
export const login = async ({
  email,
  password,
}: LoginType): Promise<UserData> => {
  const { data }: AxiosResponse<UserData> = await axiosInstance.post(
    "/organizational-user/login",
    {
      userName: email,
      userPassword: password,
    }
  );
  return data; // Return only the UserData from the AxiosResponse
};
