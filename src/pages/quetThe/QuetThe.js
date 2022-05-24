import classNames from 'classnames/bind';
import styles from './QuetThe.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faClock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

let soSinhVien = 17;
let notice = ['Thêm thành công', 'Sinh viên khoa khác'];

function QuetThe() {
    return (
        <>
            <div className={cx('checkin-wrapper')}>
                <div className={cx('checkin-inner')}>
                    <p>Số sinh viên hiện tại: {soSinhVien}</p>
                    <div className={cx('checkin')}>
                        <input placeholder="Nhập mã số sinh viên" spellCheck={false} />
                        <button className={cx('checkin-btn')}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </button>
                    </div>
                    <div className={cx('notice')}>
                        {/*icon*/}
                        <p>{notice[0]}</p>
                    </div>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                        <div className={cx('student-info-time')}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>11:56am</p>
                        </div>
                    </div>
                    <button className={cx('student-checkout-btn')}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                        <div className={cx('student-info-time')}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>11:56am</p>
                        </div>
                    </div>
                    <button className={cx('student-checkout-btn')}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                        <div className={cx('student-info-time')}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>11:56am</p>
                        </div>
                    </div>
                    <button className={cx('student-checkout-btn')}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                        <div className={cx('student-info-time')}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>11:56am</p>
                        </div>
                    </div>
                    <button className={cx('student-checkout-btn')}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                </div>
            </div>
            <div className={cx('student-list')}>
                <div className={cx('student')}>
                    <div className={cx('student-avatar')}></div>
                    <div className={cx('student-info')}>
                        <div className={cx('student-id')}>2012345</div>
                        <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                        <div className={cx('student-info-time')}>
                            <FontAwesomeIcon icon={faClock} />
                            <p>11:56am</p>
                        </div>
                    </div>
                    <button className={cx('student-checkout-btn')}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuetThe;
