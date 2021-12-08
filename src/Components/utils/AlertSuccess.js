import React from "react";

const AlertSuccess = ({ message }) => {
  return (
    <div className="alert alert-success success">
      <p>{message}</p>
    </div>
  );
};

export default AlertSuccess;
