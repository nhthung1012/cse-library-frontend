import classNames from 'classnames/bind';
import { useUser } from '../../../../hooks/user';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

const roleToDesc = {
    'admin': 'Quản trị viên',
    'student': 'Sinh viên'
}

function Account() {
    const user = useUser();

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
