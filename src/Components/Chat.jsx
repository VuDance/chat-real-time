import React,{ useContext } from 'react'
import classNames from 'classnames/bind'
import style from "./Components.module.scss"
import {AiFillVideoCamera} from "react-icons/ai"
import {FaUserPlus} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../Context/ChatContext'

const cx=classNames.bind(style)

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className={cx("chat")}>
      <div className={cx("chatInfor")}>
        <span>{data.user?.displayName}</span>
        <div className={cx("chatIcon")}>
          <AiFillVideoCamera className={cx("icon")}/>
          <FaUserPlus className={cx("icon")}/>
          <FiMoreHorizontal className={cx("icon")}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat