import React from "react";

const AlertWarning = ({ message }) => {
  return (
    <div className="alert alert-warning warning">
      <p>{message}</p>
    </div>
  );
};

export default AlertWarning;
