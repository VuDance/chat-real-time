import React from 'react'
import classNames from 'classnames/bind'
import style from "./Home.module.scss"
import Chat from '../../Components/Chat'
import Sidebar from '../../Components/Sidebar'

const cx= classNames.bind(style)

function Home() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home