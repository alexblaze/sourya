import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

interface NotificationParams {
  message?: string;
  description?: string;
}

export const showNotification = (
  type: NotificationType,
  params: NotificationParams
) => {
  notification[type]({
    message: params.message,
    description: params.description,
    placement: "topRight",
  });
};

export const showSuccessNotification = (params: NotificationParams) =>
  showNotification("success", params);

export const showInfoNotification = (params: NotificationParams) =>
  showNotification("info", params);

export const showWarningNotification = (params: NotificationParams) =>
  showNotification("warning", params);

export const showErrorNotification = (params: NotificationParams = {}) =>
  showNotification("error", {
    message: params.message || "Error",
    description: params.description || "Something went wrong!",
  });
