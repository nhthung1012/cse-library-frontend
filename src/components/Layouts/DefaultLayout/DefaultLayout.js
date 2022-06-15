import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Account from './Account/Account';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx("content")}>
                {children}
                <Account />
            </div>
        </div>
    );
}

export default DefaultLayout;
