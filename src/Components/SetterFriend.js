import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SetterFriend = () => {
  const store = useSelector((data) => data);
  const myId = localStorage.getItem("userId");
  // console.log(store.chat.setterFriend);

  useEffect(() => {
    const newArr = [];
    // console.log(arr);
    store.chat.setterFriend.forEach((element) => {
      let obj = {};
      obj["chatId"] = element._id;
    });
    // console.log(newArr);
    localStorage.setItem("friends", JSON.stringify(newArr));
  }, []);

  return null;
};

export default SetterFriend;
