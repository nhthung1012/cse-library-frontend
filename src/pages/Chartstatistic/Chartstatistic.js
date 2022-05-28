import classNames from 'classnames/bind';
import styles from './Chartstatistic.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faCloc, faAngleDown, faMartiniGlass, faMagnifyingGlass, faMagnifyingGlassPlus, faMagnifyingGlassChart, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

let soSinhVien = 17;
let notice = ['Thêm thành công', 'Sinh viên khoa khác'];

function List_sta() {
    return (
        <>
            <div className={cx('top-wrapper')}>
                <div className={cx('option-and-infor-wrapper')}>
                    <div className={cx('option-wrapper')}>
                        <button className={cx('list-wrapper')}>
                            Danh sách
                        </button>

                        <button className={cx('chart-wrapper')}>
                            Biểu đồ
                        </button>
    
                    </div>

                    <div className={cx('admin')}>
                        <div className={cx('admin-name')}> <p>Trần Ngọc Bảo Duy </p>  Quản trị viên  </div>
                    </div>
                </div>

    
            </div>

            <div className={cx('day-month-year-state-wrapper')}>
                <div className={cx('day-month-year-state')}>
                    <p>Trang thống kê sinh viên vào/ra thư viện </p>
                    <div className={cx('day-month-year')}>
                        <button className={cx('year-wrapper')}>
                            Năm
                            <div className={cx('angle-down-ic')}><FontAwesomeIcon icon={faAngleDown} /> </div>
                        </button>

                        <button className={cx('month-wrapper')}>
                            Tháng
                            <div className={cx('angle-down-ic')}><FontAwesomeIcon icon={faAngleDown} /> </div>
                        </button>

                        <button className={cx('day-wrapper')}>
                            Ngày
                            <div className={cx('angle-down-ic')}><FontAwesomeIcon icon={faAngleDown} /> </div>
                        </button>

                        <button className={cx('xem-ngay-wrapper')}>
                            <div className={cx('text-xem-ngay')}>Xem ngay</div>
                        </button>
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
                                    <p>Check-in: 11:56am</p>
                                </div>
                                <div className={cx('time-out')}>
                                    <p>Check-out: 11:56am</p>
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
                                    <p>Check-in: 11:56am</p>
                                </div>
                                <div className={cx('time-out')}>
                                    <p>Check-out: 11:56am</p>
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
                                    <p>Check-in: 11:56am</p>
                                </div>
                                <div className={cx('time-out')}>
                                    <p>Check-out: 11:56am</p>
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
                                    <p>Check-in: 11:56am</p>
                                </div>
                                <div className={cx('time-out')}>
                                    <p>Check-out: 11:56am</p>
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
                                    <p>Check-in: 11:56am</p>
                                </div>
                                <div className={cx('time-out')}>
                                    <p>Check-out: 11:56am</p>
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
