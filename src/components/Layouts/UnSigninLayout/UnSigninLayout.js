import classNames from 'classnames/bind';
import styles from './UnSigninLayout.module.scss';

const cx = classNames.bind(styles);

function UnSigninLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    );
}

export default UnSigninLayout;
