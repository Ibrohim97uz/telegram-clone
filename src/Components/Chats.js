import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_message } from "../redux/action/chat";

const Chats = () => {
  const dispatch = useDispatch();
  const store = useSelector((data) => data);
  async function handleClick(id) {
    const chat = await setFriend(id);
    console.log(chat);
    dispatch(load_message(chat));
  }
  const token = localStorage.getItem("token");

  async function setFriend(id) {
    console.log(id);
    const resp = await fetch(
      `https://telegram-alisherjon-api.herokuapp.com/chats/${id}`,
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
    return respData.chat.messages;
  }

  if (store.chat.friend.length !== 0) {
    return (
      <div className="chats">
        {store.chat.friend.map((friend) => {
          return (
            <div
              key={friend._id}
              onClick={() => handleClick(friend.chatId)}
              className="chat"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0l_lIi2jQe2yTE-12S6ZsGe8nrJw11WXOg&usqp=CAU"
                alt=""
              />
              <div className="chat-center">
                <h5>{friend.name}</h5>
                <p>{friend.phone}</p>
              </div>
              <div className="chat-right">
                <h5>7:25 PM</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="chats">
        <h1>no messages</h1>
      </div>
    );
  }
};

export default Chats;
