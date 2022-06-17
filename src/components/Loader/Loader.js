import classNames from 'classnames/bind';
import styles from './Loader.scss';

const cx = classNames.bind(styles);

function Loader() {
    return (
        <div className={cx("loader-wrapper")}>
            <div className={cx("loader")}></div>
        </div>
    );
}

export default Loader;
