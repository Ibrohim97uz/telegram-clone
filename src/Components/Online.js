import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { new_message_action } from "../redux/action/newMessage";

const Online = () => {
  const store = useSelector((data) => data);
  const ref = useRef("");
  const myId = store.userReducer.userId;
  const token = localStorage.getItem("token");
  const chatId = store.messageReducer.chatId;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value === "") {
      return;
    }
    setMessage();
    const obj = {
      messageText: ref.current.value,
      messageFrom: myId,
      messageData: new Date(),
    };
    dispatch(new_message_action(obj));
    ref.current.value = "";
  };

  async function setMessage() {
    const body = JSON.stringify({
      chatId,
      text: ref.current.value,
    });
    const resp = await fetch(
      "https://telegram-alisherjon-api.herokuapp.com/messages",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body,
      }
    );

    const respData = await resp.json();
  }

  if (store.messageReducer.messageWith === "") {
    return (
      <div className="right-online flex">
        <p>No messages yet...</p>
      </div>
    );
  } else {
    return (
      <div className="right-online right-online-relative">
        <div className="name">
          <h3>{store.messageReducer.messageWith}</h3>
          <p>online</p>
        </div>

        <div className="message-wrapper">
          <div className="messages">
            {store.messageReducer.messages.map((message) => {
              if (message.messageFrom === myId) {
                return (
                  <div key={message.messageId} className="message-from-me">
                    {message.messageText}
                  </div>
                );
              } else {
                return (
                  <div className="message-to-me">{message.messageText}</div>
                );
              }
            })}
          </div>
        </div>
        <form className="input-message" onSubmit={(e) => handleSubmit(e)}>
          <input ref={ref} type="text" />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    );
  }
};

export default Online;
