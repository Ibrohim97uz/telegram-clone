import React from "react";

const AlertDanger = ({ message }) => {
  return (
    <div className="alert alert-danger danger">
      <p>{message}</p>
    </div>
  );
};

export default AlertDanger;
