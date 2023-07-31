import { useEffect } from "react";
import { Form } from "antd";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../components/notification/Notification";
import { useRequest } from "ahooks";
import { login } from "../app/api/login/login";
import { setUser } from "../app/utils/cookieHelper";
import { LoginType, UserData } from "../app/types/types";

export default function useLoginPage() {
  const [form] = Form.useForm();
  const invalidToken = localStorage.getItem("InvalidToken");
  useEffect(() => {
    if (invalidToken !== null) {
      showErrorNotification({
        description: "Session expired. You have been logged out.",
      });
      localStorage.removeItem("InvalidToken");
    }
  }, [invalidToken]);

  const { loading: isLoading, run: runLoginRequest } = useRequest(login, {
    manual: true,
    onSuccess: (userData: UserData) => {
      localStorage.removeItem("InvalidToken");
      // const {
      //   balanceCn,
      //   branch,
      //   bsdate,
      //   fiscalYear,
      //   token,
      //   userName,
      //   userType,
      // } = userData;

      // setUser({
      //   token: token,
      //   balanceCn: balanceCn,
      //   branch: branch,
      //   bsdate: bsdate,
      //   fiscalYear: fiscalYear,
      //   userName: userName,
      //   userType: userType,
      // });

      setUser(userData);
      showSuccessNotification({
        message: "Success",
        description: "Login Successful!",
      });
    },
    onError: (err) => {
      localStorage.removeItem("InvalidToken");
      showErrorNotification({
        description: err.message || "Login failed",
      });
    },
  });

  const onFinish = (formValue: LoginType) => {
    runLoginRequest(formValue);
  };
  return {
    form,
    isLoading,
    onFinish,
  };
}
