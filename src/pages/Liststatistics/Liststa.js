import classNames from 'classnames/bind';
import styles from './Liststa.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
var studentinfor = {
    name: 'Trần Long Biên',
    id: '2010924',
    checkintime: '11:56 am',
    checkouttime: '12:21 am'
}
var liststudnets = [studentinfor, studentinfor, studentinfor, studentinfor, studentinfor, studentinfor,studentinfor,studentinfor,studentinfor,studentinfor,studentinfor ];



function List_sta() {
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [day, setDay] = useState(null)
    const [search, setSearch] = useState(null)
    const [showSta,setShowSta] = useState(false)

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
    function handleFindSt (){
        console.log(day,month,year,search)
        setShowSta(true)
    }
    return (
        <>
            <div className={cx('top-wrapper')}>
                <div className={cx('option-and-infor-wrapper')}>
                    <div className={cx('option-wrapper')}>
                        <Link className={cx('list-wrapper')} to="/ThongKe">
                            Danh sách
                        </Link>
                        <Link className={cx('chart-wrapper')} to="/BieuDo">
                            Biểu đồ
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('day-month-year-state-wrapper')}>
                <div className={cx('day-month-year-state')}>
                    <p>Trang thống kê sinh viên vào/ra thư viện </p>
                    <div className={cx('day-month-year')}>
                        <div className={cx('dmy-wrapper')}>
                            <input type="text" placeholder="Ngày" spellCheck={false} onChange = {getDay} />
                        </div>

                        <div className={cx('dmy-wrapper')}>
                            <input type="text" placeholder="Tháng" spellCheck={false} onChange = {getMonth} />
                        </div>

                        <div className={cx('dmy-wrapper')}>
                            <input type="text" placeholder="Năm" spellCheck={false} onChange = {getYear} />
                        </div>


                        

                        <div className={cx('search-wrapper')}>
                            <input type = "text" placeholder="Tìm kiếm" spellCheck={false} onChange = {getSearch} />

                            <button onClick={handleFindSt} className={cx('search-wrapper-button')}>
                                <div className={cx('magnifying-glass')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                                </div>
                            </button>
                        </div>
                        {search}
                    </div>
                </div>
            </div>
            {showSta && <div>
                {liststudnets.map((stu) => {
                    return <div className={cx('student-list')}>
                        <div className={cx('student')}>
                            <div className={cx('student-avatar')}></div>
                            <div className={cx('student-info')}>
                                <div className={cx('student-id')}>{stu.id}</div>
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
                            {/* <button className={cx('student-fix')}>Chỉnh sửa</button> */}
                        </div>
                    </div>;
                })}
            </div>}
        </>
    );
}

export default List_sta;
