import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chat_id_action } from "../redux/action/chatIdAction";
import { message_action } from "../redux/action/messageAction";
import { message_with_action } from "../redux/action/messageWithAction";

const Chats = () => {
  const token = localStorage.getItem("token");
  const store = useSelector((data) => data);
  const dispatch = useDispatch();

  async function setFriendMessage(id, name) {
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
    const chatId = respData.chat._id;
    const arr = [];
    respData.chat.messages.forEach((message) => {
      let obj = {
        messageId: message._id,
        messageFrom: message.from,
        messageText: message.text,
        messageData: message.date,
      };

      arr.push(obj);
    });
    console.log(arr);
    dispatch(message_action(arr));
    dispatch(message_with_action(name));
    dispatch(chat_id_action(chatId));
  }

  const handleClick = (id, name) => {
    setFriendMessage(id, name);
  };

  return (
    <div className="chat-members">
      {store.userReducer.friends.map((friend) => {
        return (
          <div
            onClick={() => handleClick(friend.chatId, friend.friendName)}
            key={friend.chatId}
            className="user-friend-item"
          >
            <h3>{friend.friendName}</h3>
            <p>{friend.friendPhone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
