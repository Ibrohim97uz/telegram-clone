import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { search_reducer } from "../redux/action/searchAction";
import Chats from "./ChatMembers";
import SearchResult from "./SearchResult";

const Search = () => {
  const [input, setInput] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const store = useSelector((data) => data);
  const [item, setItem] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    fetch(`https://telegram-alisherjon-api.herokuapp.com/users/${input}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const obj = {
          searchFriendId: data.user._id,
          searchName: data.user.name,
          phone: data.user.phone,
          isHidden: false,
        };
        dispatch(search_reducer(obj));
      })
      .catch(() => {
        const obj = {
          searchFriendId: "",
          searchName: "",
          phone: "",
          isHidden: true,
        };
        dispatch(search_reducer(obj));
        return toast.error("username is not found");
      });
  };

  const handleClick = () => {
    setItem(!item);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <div className="search">
      <div onClick={() => handleClick()} className="menu-icon">
        <i className="fas fa-2x fa-align-justify"></i>
        <div className={item ? "menu-icon-item" : "menu-icon-item hidden"}>
          <div>
            <h1>Name: {store.userReducer.name}</h1>
            <br />
            <br />
            <p>Phone: {store.userReducer.phone}</p>
            <br />
            <br />
            <p>Username: {store.userReducer.username}</p>
          </div>
          <button onClick={() => logOut()} className="log-out">
            Log out
          </button>
        </div>
      </div>
      <div className="user-friends">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search..."
          />
        </form>
        <SearchResult />
        <Chats />
      </div>
    </div>
  );
};

export default Search;
