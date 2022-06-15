import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faSquareCheck,
    faListCheck,
    faChartColumn,
    faUserGroup,
    faBookOpen,
    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

const user = {
    name: 'Trần Ngọc Bảo Duy',
    role: 'admin',
}

function Sidebar() {
    const [active, setActive] = useState(true);

    const handleActive = () => setActive(!active);

    return (
        <aside className={cx('wrapper')}>
            <button className={cx(active?'menu-btn':'menu-btn-unactive')} onClick={handleActive}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={cx(active?'sidebar-display':'sidebar-mobile')}>
                <div className={cx('sidebar-img')}>
                    <FontAwesomeIcon icon={faBookOpen} />
                    <h1 className={cx('name-project')}> <a href="/">CSE Library</a> </h1>
                    <button className={cx('close-btn')}  onClick={handleActive}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className={cx('sidebar-link')}>
                    <a href="/" className={cx(window.location.pathname === '/' ? 'sidebar-btn-active' : 'sidebar-btn')}>
                        <FontAwesomeIcon icon={faHouse} />
                        <b>{' Trang chủ'}</b>
                    </a>
                    <a
                        href="/ViTri"
                        className={cx(window.location.pathname === '/ViTri' ? 'sidebar-btn-active' : 'sidebar-btn')}
                    >
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <b>{' Chọn vị trí'}</b>
                    </a>
                    <a
                        href="/QuetThe"
                        className={cx(window.location.pathname === '/QuetThe' ? 'sidebar-btn-active' : 'sidebar-btn')}
                        style={user.role==='admin'?{display:'block'}:{display:'none'}}
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <b>{' Quẹt thẻ'}</b>
                    </a>
                    <a
                        href="/ThongKe"
                        className={cx(window.location.pathname === '/ThongKe' ? 'sidebar-btn-active' : 'sidebar-btn')}
                        style={user.role==='admin'?{display:'block'}:{display:'none'}}
                    >
                        <FontAwesomeIcon icon={faChartColumn} />
                        <b>{' Thống kê'}</b>
                    </a>
                    <a
                        href="/Manage"
                        className={cx(window.location.pathname === '/Manage' ? 'sidebar-btn-active' : 'sidebar-btn')}
                        style={user.role==='admin'?{display:'block'}:{display:'none'}}
                    >
                        <FontAwesomeIcon icon={faUserGroup} />
                        <b>{' Quản Lý'}</b>
                    </a>
                </div>
                <a className={cx('sidebar-signout')} href="/">
                    {' Đăng xuất'}
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
