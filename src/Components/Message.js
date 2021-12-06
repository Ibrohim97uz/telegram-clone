import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NewMessage, setter_friend } from "../redux/action/chat";
import SetterFriend from "./SetterFriend";

const Message = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const store = useSelector((data) => data);
  const chatId = store.chat.tempChatId;
  const myId = localStorage.getItem("userId");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") return;

    const newMessage = {
      chatId,
      text,
    };
    setMessage(newMessage);

    dispatch(NewMessage(newMessage));
    setText("");
  };

  async function setMessage(obj) {
    console.log(obj);
    const body = JSON.stringify({
      chatId: obj.chatId,
      text: obj.text,
    });
    console.log(body);
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
    console.log(resp);

    const respData = await resp.json();
    console.log(respData);
  }

  const messages = store.chat.messages;

  return (
    <div>
      <div id="chat" className="right-side-chat-main">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`message ${message.from === myId ? "from" : "to"}-you`}
            >
              {message.text}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="right-bottom">
          <div className="bottom-left">
            <i className="fas fa-2x fa-paperclip"></i>
            <input
              type="text"
              placeholder="New message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="bottom-right">
            <button>
              <i className="fab fa-2x fa-telegram-plane"></i>
            </button>
            <i className="far fa-2x fa-smile"></i>
            <i className="fas fa-2x fa-microphone"></i>
          </div>
        </div>
      </form>
      <SetterFriend />
    </div>
  );
};

export default Message;
