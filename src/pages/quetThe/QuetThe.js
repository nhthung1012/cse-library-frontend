import React from 'react'
import './quetThe.css'

let currentStudent = 17
let user = [
  {
    name: "Nguyen Van A",
    id: 2011329,
    time: "11:01am"
  },
  {
    name: "Tran Van B",
    id: 2012202,
    time: "11:42am"
  }
]

function QuetThe() {
  return (
    <div className="container">
      <div class="checkin">
        <h3>Số sinh viên hiện tại: {currentStudent}</h3>
        <div className="checkin-wrapper">
          <input type="text" placeholder="Nhập mã số sinh viên"/>
          <img src="image/checkin_button.png" width="50" height="50"></img>
        </div>
      </div>
      <div className="status">
        <li className="user">
          <img src ='#' className="user-avatar"></img>
          <div className="user-info">
            <div className="user-id">{user[0].id}</div>
            <div className="user-name">{user[0].name}</div>
            <div className="user-time">{user[0].time}</div>
          </div>
          <img src ='#' className="check-out"></img>
        </li>
        <li className="user">
          <img src ='#' className="user-avatar"></img>
          <div className="user-info">
            <div className="user-id">{user[0].id}</div>
            <div className="user-name">{user[0].name}</div>
            <div className="user-time">{user[0].time}</div>
          </div>
          <img src ='#' className="check-out"></img>
        </li>
        <li className="user"></li>
      </div>
    </div>
  )
}

export default QuetThe