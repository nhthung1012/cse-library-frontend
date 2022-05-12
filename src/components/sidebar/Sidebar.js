import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css';

function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <Link to={'/home'} class="active">Trang chủ</Link>
            <Link to={'/quet-the'} >Quẹt thẻ</Link>
            <Link to={'/thong-ke'} >Thống kê</Link>
            <Link to={'/quan-ly'} >Quản lý</Link>
        </div>
    </>
  )
}

export default Sidebar