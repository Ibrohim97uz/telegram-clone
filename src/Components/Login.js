import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { user_action } from "../redux/action/userAction";

const Register = () => {
  const passwordRef = useRef();
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === "" || userName === "") {
      return toast.warning("Please fill all the fields");
    }

    getLogin("https://telegram-alisherjon-api.herokuapp.com/auth");
  };

  const handleChangeUserName = (value) => {
    setUserName(value);
  };

  async function getLogin(url) {
    const body = JSON.stringify({
      username: userName,
      password: passwordRef.current.value,
    });

    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });

    const respData = await resp.json();

    if (!resp.ok) {
      return toast.error("User not found!");
    }

    localStorage.setItem("token", respData.token);
    history.push("/chat");
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <div className="form">
          <div className="check-username">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              onChange={(e) => handleChangeUserName(e.target.value)}
              type="username"
              id="username"
              value={userName}
            />
            <br /> <br />
          </div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            className="w-100"
            type="password"
            id="password"
            ref={passwordRef}
          />
        </div>

        <div className="register-button w-100">
          <button className="w-100 " type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
