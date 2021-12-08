import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { add_friend } from "../redux/action/addFriend";
import { chat_id_action } from "../redux/action/chatIdAction";
import { message_action } from "../redux/action/messageAction";
import { message_with_action } from "../redux/action/messageWithAction";
import { clear_search } from "../redux/action/searchAction";

const SearchResult = () => {
  const token = localStorage.getItem("token");
  const store = useSelector((data) => data);
  const dispatch = useDispatch();

  async function handleClick() {
    setChat(store.searchReducer.searchFriendId);
    dispatch(clear_search());
  }

  async function setChat(id) {
    const body = JSON.stringify({
      friendId: id,
    });

    const resp = await fetch(
      "https://telegram-alisherjon-api.herokuapp.com/chats/",
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

    if (respData.status !== 201) {
      return toast.error("Chat is already exists!");
    }

    const obj = {
      chatId: respData.chat._id,
      friendName: store.searchReducer.searchName,
      friendPhone: store.searchReducer.phone,
    };
    dispatch(add_friend(obj));
    return obj;
  }

  return (
    <div
      onClick={() => handleClick()}
      className={
        store.searchReducer.isHidden ? "search-result hidden" : "search-result "
      }
    >
      <h3>{store.searchReducer.searchName}</h3>
      <h3>{store.searchReducer.phone}</h3>
    </div>
  );
};

export default SearchResult;
