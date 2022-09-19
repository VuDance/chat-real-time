import React, { useContext } from 'react';
import classNames from "classnames/bind";
import style from "./Components.module.scss";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const cx = classNames.bind(style);


function Navbar() {
  const {currentUser}=useContext(AuthContext)

  return (
    <div className={cx("navbar")} >
      <h3 className={cx("logo")}>VDChat</h3>
      <div className={cx("user")}>
        <img src={currentUser.photoURL}/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar