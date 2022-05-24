import classNames from 'classnames/bind';
import styles from './DefaultLayout.scss';
import Sidebar from './Sidebar/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
