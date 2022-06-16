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
import { Link } from "react-router-dom";
import { useUser } from '../../../../hooks/user';
import { BACKEND_URL } from '../../../../utils/constants';

const cx = classNames.bind(styles);

function Sidebar() {
    const [user, setUser] = useUser();

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
                    <h1 className={cx('name-project')}> <Link to="/">CSE Library</Link> </h1>
                    <button className={cx('close-btn')}  onClick={handleActive}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className={cx('sidebar-link')}>
                    <Link to="/" className={cx(window.location.pathname === '/' ? 'sidebar-btn-active' : 'sidebar-btn')}>
                        <FontAwesomeIcon icon={faHouse} />
                        <b>{' Trang chủ'}</b>
                    </Link>
                    <Link
                        to="/ViTri"
                        className={cx(window.location.pathname === '/ViTri' ? 'sidebar-btn-active' : 'sidebar-btn')}
                    >
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <b>{' Chọn vị trí'}</b>
                    </Link>
                    <Link
                        to="/QuetThe"
                        className={cx(window.location.pathname === '/QuetThe' ? 'sidebar-btn-active' : 'sidebar-btn')}
                        style={user.role==='admin'?{display:'block'}:{display:'none'}}
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <b>{' Quẹt thẻ'}</b>
                    </Link>
                    <Link
                        to="/ThongKe"
                        className={cx( (window.location.pathname === '/ThongKe') || (window.location.pathname === '/BieuDo') ? 'sidebar-btn-active' : 'sidebar-btn')}
                    >
                        <FontAwesomeIcon icon={faChartColumn} />
                        <b>{' Thống kê'}</b>
                    </Link>
                    <Link
                        to="/Manage"
                        className={cx(window.location.pathname === '/Manage' ? 'sidebar-btn-active' : 'sidebar-btn')}
                        style={user.role==='admin'?{display:'block'}:{display:'none'}}
                    >
                        <FontAwesomeIcon icon={faUserGroup} />
                        <b>{' Quản Lý'}</b>
                    </Link>
                </div>
                <Link className={cx('sidebar-signout')} to="/" onClick={() => {
                    setUser(undefined);
                    fetch(`${BACKEND_URL}/session`, { method: 'DELETE', credentials: 'include' })
                }}>
                    {' Đăng xuất'}
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
