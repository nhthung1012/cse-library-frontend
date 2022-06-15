import React from 'react';
import styles from './Home.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const user = {
    name: 'Trần Ngọc Bảo Duy',
    role: 'student',
}

function Home() {
    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('home-inner')}>
                <h2>Chào mừng đến với thư viện</h2>
                <h2>Khoa Khoa học và Kỹ thuật máy tính</h2>
                <h1>CSE Library</h1>
                <div className={cx('btn')}>
                    <a href={user!==undefined?"/ViTri":"/Signin"} className={cx('start-btn')}>
                        Vào ngay !
                    </a>
                    <button className={cx('start-btn')}>
                        Check out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
