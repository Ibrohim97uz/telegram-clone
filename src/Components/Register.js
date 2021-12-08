import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [userCheck, setUserCheck] = useState(null);
  const nameRef = useRef();
  const passwordRef = useRef();
  const telNumberRef = useRef();
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      passwordRef.current.value === "" ||
      telNumberRef === "" ||
      userName === ""
    ) {
      return toast.warning("please fill all the fields");
    } else if (userCheck !== true) {
      return toast.warning("please check your username");
    }
    getRegister("https://telegram-alisherjon-api.herokuapp.com/users");
  };

  const handleUserCheck = () => {
    checkUser(
      `https://telegram-alisherjon-api.herokuapp.com/usernames/${userName}`
    );
  };

  const handleChangeUserName = (value) => {
    setUserName(value);
    setUserCheck(null);
  };

  async function checkUser(url) {
    if (userName === "") {
      return toast.warning("please fill the field");
    }
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    setUserCheck(resp.ok);
  }

  async function getRegister(url) {
    const body = JSON.stringify({
      name: nameRef.current.value,
      username: userName,
      password: passwordRef.current.value,
      phone: telNumberRef.current.value,
    });

    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });

    if (!resp.ok) {
      return toast.error("Your phone is already registered!");
    }
    const respData = await resp.json();

    localStorage.setItem("token", respData.token);

    history.push("/chat");
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>
        <div className="form">
          <label htmlFor="Name">Name:</label>
          <br />
          <input className="w-100" type="Name" id="Name" ref={nameRef} />
          <br /> <br />
          <label htmlFor="phone">Phone:</label>
          <br />
          <input className="w-100" type="phone" id="phone" ref={telNumberRef} />
          <br /> <br />
          <div className="check-username">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              onChange={(e) => handleChangeUserName(e.target.value)}
              type="username"
              id="username"
              value={userName}
            />
            <i
              onClick={handleUserCheck}
              className={
                userCheck !== null
                  ? userCheck === true
                    ? "fas fa-check green"
                    : "fas fa-times red"
                  : "fas fa-question yellow"
              }
            ></i>
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
