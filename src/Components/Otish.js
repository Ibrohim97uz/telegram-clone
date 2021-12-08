import React, { useEffect } from "react";
import Search from "./Search";
import Online from "./Online";
import { useDispatch } from "react-redux";
import { user_action } from "../redux/action/userAction";
import { useHistory } from "react-router";

const Otish = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getUserInfo(token);
  }, []);

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

    if (!resp.ok) {
      history.push("/login");
    }
    const respData = await resp.json();

    const userId = respData.user._id;

    const friends = [];

    respData.user.chats.forEach((member) => {
      const obj = {
        chatId: member._id,
        friendName: "",
        friendPhone: "",
        friendUserName: "",
      };
      member.members.forEach((inside) => {
        if (inside._id !== userId) {
          obj.friendName = inside.name;
          obj.friendPhone = inside.phone;
          obj.friendUserName = inside.username;
        }
      });
      friends.push(obj);
    });

    const user = {
      name: respData.user.name,
      phone: respData.user.phone,
      friends,
      username: respData.user.username,
      userId,
    };

    dispatch(user_action(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <div>
      <div className="section">
        <div className="left">
          <Search />
        </div>
        <div className="right">
          <Online />
        </div>
      </div>
    </div>
  );
};

export default Otish;
