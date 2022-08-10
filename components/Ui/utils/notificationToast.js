import React from "react";
import { notification } from "antd";

const TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
};

const openNotificationWithIcon = (type, message, description) => {
  return notification[type]({
    message,
    description,
    style: {
      marginTop: "60px",
    },
  });
};

export { openNotificationWithIcon, TYPE };
