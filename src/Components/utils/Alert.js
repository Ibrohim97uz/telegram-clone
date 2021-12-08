import React from "react";
import AlertSuccess from "./AlertSuccess";

const Alert = ({ type, message }) => {
  if (type === "success") {
    return <AlertSuccess />;
  } else return null;
};

export default Alert;
