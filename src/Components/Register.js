import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { new_user } from "../redux/action/user";

const Register = () => {
  const nameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const telNumberRef = useRef();
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    getRegister("https://telegram-alisherjon-api.herokuapp.com/users");
  };

  async function getRegister(url) {
    const body = JSON.stringify({
      name: nameRef.current.value,
      username: userNameRef.current.value,
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

    const respData = await resp.json();
    if (respData.token) {
      console.log(respData);
      localStorage.setItem("token", respData.token);
      history.push("/Otish");
      dispatch(new_user(respData.user._id));
    }
  }

  return (
    <div>
      <div className="open">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form1">
              <h2 className="title">Register</h2>
              <div className="form">
                <label htmlFor="Name">Name:</label>
                <br />
                <input type="Name" id="Name" ref={nameRef} />
                <br /> <br />
                <label htmlFor="phone">Phone:</label>
                <br />
                <input type="phone" id="phone" ref={telNumberRef} />
                <br /> <br />
                <label htmlFor="username">Username:</label>
                <br />
                <input type="username" id="username" ref={userNameRef} />
                <br /> <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" id="password" ref={passwordRef} />
              </div>

              <div className="btn">
                <button type="submit">Sign Up</button>
                <Link to="/Login" className="btn">
                  <button>Log in</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
