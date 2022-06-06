import classNames from 'classnames/bind';
import styles from './Liststa.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
var studentinfor = {
    name: 'Trần Long Biên',
    mssv: '2010924',
    checkintime: '11:56 am',
    checkouttime: '12:21 am'
}
var liststudnets = [studentinfor, studentinfor, studentinfor, studentinfor, studentinfor, studentinfor,studentinfor,studentinfor,studentinfor,studentinfor,studentinfor ];



function List_sta() {
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [day, setDay] = useState(null)
    const [search, setSearch] = useState(null)
    function getYear (val){
        setYear(val.target.value)
    }
    function getMonth (val){
        setMonth(val.target.value)
    }
    function getDay (val){
        setDay(val.target.value)
    }
    function getSearch (val){
        setSearch(val.target.value)
    }
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
                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Năm" spellCheck={false} onChange = {getYear} />
                            {year}
                        </div>

                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Tháng" spellCheck={false} onChange = {getMonth} />
                            {month}
                        </div>

                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Ngày" spellCheck={false} onChange = {getDay} />
                            {day}
                        </div>

                        <div className={cx('search-wrapper')}>
                            <input type = "text" placeholder="Tìm kiếm" spellCheck={false} onChange = {getSearch} />

                            <button className={cx('search-wrapper-button')}>
                                <div className={cx('magnifying-glass')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                                </div>
                            </button>
                        </div>
                        {search}
                    </div>
                </div>
            </div>
            <div>
                {liststudnets.map((stu) => {
                    return <div className={cx('student-list')}>
                        <div className={cx('student')}>
                            <div className={cx('student-avatar')}></div>
                            <div className={cx('student-info')}>
                                <div className={cx('student-id')}>{stu.mssv}</div>
                                <div className={cx('student-name')}>
                                    {stu.name}
                                    <div className={cx('student-info-time')}>
                                        <div className={cx('time-in')}>
                                            Check-in: {stu.checkintime}
                                        </div>
                                        <div className={cx('time-out')}>
                                            Check-out: {stu.checkouttime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={cx('student-fix')}>Chỉnh sửa</button>
                        </div>
                    </div>;
                })}
            </div>
        </>
    );
}

export default List_sta;
