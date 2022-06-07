import classNames from 'classnames/bind';
import styles from './Chartstatistic.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React, {useState} from 'react';

const cx = classNames.bind(styles);

let soluotravao = 73;


var month;
var day;


function Chartsta() {
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [day, setDay] = useState(null)
    function getYear (val){
        setYear(val.target.value)
    }
    function getMonth (val){
        setMonth(val.target.value)
    }
    function getDay (val){
        setDay(val.target.value)
    }
    return (
        <>
            <div className={cx('top-wrapper-chart')}>
                <div className={cx('option-and-infor-wrapper-chart')}>
                    <div className={cx('option-wrapper-chart')}>
                        <a className={cx('list-wrapper-chart')} href="/ThongKe">
                            Danh sách
                        </a>
                        <a className={cx('chart-wrapper-chart')} href="/BieuDo">
                            Biểu đồ
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('day-month-year-state-wrapper-chart')}>
                <div className={cx('day-month-year-state-chart')}>
                    <p>Biểu đồ thông kê lượt vào</p>
                    <div className={cx('day-month-year-chart')}>
                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Năm" spellCheck={false} onChange = {getYear} />
                            {year}
                        </div>

                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Tháng" spellCheck={false} onChange = {getMonth}/>
                            {month}
                        </div>

                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Ngày" spellCheck={false} onChange = {getDay}/>
                            {day}
                        </div>

                        <button className={cx('xem-ngay-wrapper-chart')}>
                            <div className={cx('text-xem-ngay-wrapper-chart')}>Xem ngay</div>
                        </button>
                    </div>
                    <p className={cx('text-today')}>Hôm nay có {soluotravao} lượt vào thư viện </p>
                </div>
            </div>

            <div className={cx('bar-chart')}>
                <Bar
                    data={{
                        // Name of the variables on x-axies for each bar
                        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
                        datasets: [
                            {
                                // Label for bars
                                label: 'Số lượng sinh viên / Giờ',
                                // Data or value of your each variable
                                data: [8, 10, 12, 7, 4, 8, 14, 10],
                                // Color of each bar
                                backgroundColor: ['#80BABC'],
                                // Border color of each bar
                                borderColor: ['#80BABC'],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    // Height of graph
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        // The y-axis value will start from zero
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                        legend: {
                            labels: {
                                fontSize: 15,
                            },
                        },
                    }}
                />
            </div>
        </>
    );
}

export default Chartsta;
