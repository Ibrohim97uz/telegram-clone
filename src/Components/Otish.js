import React from "react";
import Search from "./Search";
import Chats from "./Chats";
import Online from "./Online";
import Message from "./Message";

const Otish = () => {
  return (
    <div>
      <div className="section">
        <div className="left">
          <Search />
          <Chats />
        </div>
        <div className="right">
          <Online />
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Otish;
