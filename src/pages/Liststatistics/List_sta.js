import classNames from 'classnames/bind';
import styles from './List_sta.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function List_sta() {
    return (
        <>
            <div className={cx('top-wrapper')}>
                <div className={cx('option-and-infor-wrapper')}>
                    <div className={cx('option-wrapper')}>
                        <a className={cx('list-wrapper')} href="/ThongKe">
                            Danh sách
                        </a>
                        <a className={cx('chart-wrapper')} href="/BieuDo">
                            Biểu đồ
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('day-month-year-state-wrapper')}>
                <div className={cx('day-month-year-state')}>
                    <p>Trang thống kê sinh viên vào/ra thư viện </p>
                    <div className={cx('day-month-year')}>
                        <button className={cx('year-wrapper')}>
                            Năm
                            <div className={cx('angle-down-ic')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

                        <button className={cx('month-wrapper')}>
                            Tháng
                            <div className={cx('angle-down-ic')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

                        <button className={cx('day-wrapper')}>
                            Ngày
                            <div className={cx('angle-down-ic')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

                        <div className={cx('search-wrapper')}>
                            <input placeholder="Tìm kiếm" spellCheck={false} />
                            <button className={cx('search-wrapper-button')}>
                                <div className={cx('magnifying-glass')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                                </div>
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>
                            Nguyễn Ngọc Anh
                            <div className={cx('student-info-time')}>
                                <div className={cx('time-in')}>
                                    Check-in: 11:56am
                                </div>
                                <div className={cx('time-out')}>
                                    Check-out: 11:56am
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('student-fix')}>Chỉnh sửa</button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>
                            Nguyễn Ngọc Anh
                            <div className={cx('student-info-time')}>
                                <div className={cx('time-in')}>
                                    Check-in: 11:56am
                                </div>
                                <div className={cx('time-out')}>
                                    Check-out: 11:56am
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('student-fix')}>Chỉnh sửa</button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>
                            Nguyễn Ngọc Anh
                            <div className={cx('student-info-time')}>
                                <div className={cx('time-in')}>
                                    Check-in: 11:56am
                                </div>
                                <div className={cx('time-out')}>
                                    Check-out: 11:56am
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('student-fix')}>Chỉnh sửa</button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>
                            Nguyễn Ngọc Anh
                            <div className={cx('student-info-time')}>
                                <div className={cx('time-in')}>
                                    Check-in: 11:56am
                                </div>
                                <div className={cx('time-out')}>
                                    Check-out: 11:56am
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('student-fix')}>Chỉnh sửa</button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>
                            Nguyễn Ngọc Anh
                            <div className={cx('student-info-time')}>
                                <div className={cx('time-in')}>
                                    Check-in: 11:56am
                                </div>
                                <div className={cx('time-out')}>
                                    Check-out: 11:56am
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('student-fix')}>Chỉnh sửa</button>
                </div>
            </div>
        </>
    );
}

export default List_sta;
