import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { search_result } from "../redux/action/search";
import SearchResult from "./SearchResult";

const Search = () => {
  const store = useStore((data) => data);

  const [input, setInput] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

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
          id: data.user._id,
          name: data.user.name,
          phone: data.user.phone,
        };

        dispatch(search_result(obj));
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="search">
      <i className="fas fa-2x fa-align-justify"></i>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search..."
      />
      <SearchResult />
    </form>
  );
};

export default Search;
