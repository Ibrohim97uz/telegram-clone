import React from "react";
import { useHistory } from "react-router";

const DefaultLogin = () => {
  const history = useHistory();
  history.push("/register");
  return null;
};

export default DefaultLogin;
