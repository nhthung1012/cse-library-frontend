import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

const user = {
    name: 'Trần Ngọc Bảo Duy',
    role: 'admin',
}

const roleToDesc = {
    'admin': 'Quản trị viên',
    'student': 'Sinh viên'
}

function Account() {
    return (
        <div className={cx('account')}>
            <div className={cx('account-info')}>
            <p><b>{user.name}</b></p>
            <p>{roleToDesc[user.role]}</p>
            </div>
            <div className={cx('account-avatar')}></div>
        </div>
    );
}

export default Account;
