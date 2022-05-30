import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('account')}>
            <div className={cx('account-info')}>
            <p><b>Trần Ngọc Bảo Duy</b></p>
            <p> Quản trị viên </p>
            </div>
            <div className={cx('account-avatar')}></div>
        </div>
    );
}

export default Account;
