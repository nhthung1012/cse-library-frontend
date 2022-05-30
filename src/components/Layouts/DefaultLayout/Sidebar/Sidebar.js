import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-img')}>
                <h1>CSE Library</h1>
            </div>
            <div className={cx('sidebar-link')}>
                <a href="/">Trang chủ</a>
                <a href="/ViTri">Chọn vị trí</a>
                <a href="/QuetThe">Quẹt thẻ</a>
                <a href="/ThongKe">Thống kê</a>
            </div>
            <a className={cx('sidebar-signout')} href="/">
                Đăng xuất
            </a>
        </aside>
    );
}

export default Sidebar;
