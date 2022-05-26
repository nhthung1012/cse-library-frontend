import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('account')}>
            <h2>Account</h2>
        </div>
    );
}

export default Account;
