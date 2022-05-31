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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-img')}>
                <FontAwesomeIcon icon={faBookOpen} />
                <h1>CSE Library</h1>
            </div>
            <div className={cx('sidebar-link')}>
                <a href="/">
                    <FontAwesomeIcon icon={faHouse} />
                    <b>{' Trang chủ'}</b>
                </a>
                <a href="/ViTri">
                    <FontAwesomeIcon icon={faSquareCheck} />
                    <b>{' Chọn vị trí'}</b>
                </a>
                <a href="/QuetThe">
                    <FontAwesomeIcon icon={faListCheck} />
                    <b>{' Quẹt thẻ'}</b>
                </a>
                <a href="/ThongKe">
                    <FontAwesomeIcon icon={faChartColumn} />
                    <b>{' Thống kê'}</b>
                </a>
                <a href="/Manage">
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
