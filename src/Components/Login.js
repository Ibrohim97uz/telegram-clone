import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { load_message, setter_friend } from "../redux/action/chat";
import { LOAD_MESSAGES } from "../redux/action/types";

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    getLogin("https://telegram-alisherjon-api.herokuapp.com/auth");
  };

  async function getLogin(url) {
    const body = JSON.stringify({
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    });

    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });
    // console.log(resp);
    const respData = await resp.json();
    if (respData.token) {
      // console.log(respData);
      localStorage.setItem("token", respData.token);
      const userInfo = await getUserInfo(respData.token);
      // console.log(userInfo);
      localStorage.setItem("userId", userInfo._id);
      dispatch(setter_friend(userInfo.chats));
      history.push("/Otish");
    }
  }

  async function getUserInfo(token) {
    const resp = await fetch(
      "https://telegram-alisherjon-api.herokuapp.com/users/",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    const respData = await resp.json();
    console.log(respData);
    return respData.user;
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form1">
          <h2 className="title">Log in</h2>
          <div className="form">
            <label htmlFor="username">Username:</label>
            <br />
            <input type="username" id="username" ref={userNameRef} />
            <br /> <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <div className="btnn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
