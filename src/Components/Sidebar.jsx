import React from "react";
import classNames from "classnames/bind";
import style from "./Components.module.scss";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
}

export default Sidebar;
