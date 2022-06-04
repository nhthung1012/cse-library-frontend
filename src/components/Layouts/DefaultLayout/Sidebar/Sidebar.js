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
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-img')}>
                <FontAwesomeIcon icon={faBookOpen} />
                <h1 className={cx('name-project')}> <a href="/">CSE Library</a> </h1>
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
                >
                    <FontAwesomeIcon icon={faListCheck} />
                    <b>{' Quẹt thẻ'}</b>
                </a>
                <a
                    href="/ThongKe"
                    className={cx(window.location.pathname === '/ThongKe' ? 'sidebar-btn-active' : 'sidebar-btn')}
                >
                    <FontAwesomeIcon icon={faChartColumn} />
                    <b>{' Thống kê'}</b>
                </a>
                <a
                    href="/Manage"
                    className={cx(window.location.pathname === '/Manage' ? 'sidebar-btn-active' : 'sidebar-btn')}
                >
                    <FontAwesomeIcon icon={faUserGroup} />
                    <b>{' Quản Lý'}</b>
                </a>
            </div>
            <a className={cx('sidebar-signout')} href="/">
                {' Đăng xuất'}
            </a>
        </aside>
    );
}

export default Sidebar;
