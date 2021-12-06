import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add_friend, temp_Chat_Id } from "../redux/action/chat";
import { deactivate_search_result } from "../redux/action/search";
import { DEACTIVATE_SEARCH_RESULT } from "../redux/action/types";

const SearchResult = () => {
  const [isActive, setIsactive] = useState(false);
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsactive(data.search.isActive);
  }, [data.search.isActive]);

  async function handleClick() {
    if (data.chat.friend.length === 0) {
      const id = data.search.id;
      const chatId = await setFriend(id);
      const obj = {
        name: data.search.name,
        id: chatId,
        phone: data.search.phone,
      };
      dispatch(temp_Chat_Id(chatId));
      dispatch(add_friend(obj));
      dispatch(deactivate_search_result(DEACTIVATE_SEARCH_RESULT));
    } else if (
      data.chat.friend.find((friend) => friend.name === data.search.name)
    ) {
      dispatch(deactivate_search_result(DEACTIVATE_SEARCH_RESULT));
      return;
    } else {
      const id = data.search.id;
      setFriend(id);
      const obj = {
        name: data.search.name,
        id: data.search.id,
        phone: data.search.phone,
      };
      dispatch(add_friend(obj));
      dispatch(deactivate_search_result(DEACTIVATE_SEARCH_RESULT));
    }
  }

  async function setFriend(id) {
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
    console.log(resp);
    const respData = await resp.json();
    console.log(respData);
    return respData.chat._id;
  }

  return (
    <div
      onClick={() => handleClick()}
      className={isActive ? "search-result-active" : "search-result-hidden"}
    >
      <h3>{data.search.name}</h3>
      <h3>{data.search.phone}</h3>
    </div>
  );
};

export default SearchResult;
