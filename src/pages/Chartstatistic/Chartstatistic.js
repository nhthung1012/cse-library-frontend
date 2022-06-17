import classNames from 'classnames/bind';
import styles from './Chartstatistic.scss';

import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { formatAMPM } from '../../utils/am_pm';
import { BACKEND_URL } from '../../utils/constants';



const cx = classNames.bind(styles);

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

    const [statistics, setStatistics] = useState();
    async function handleWatch (){
        setStatistics(undefined);
        console.log(day,month,year)
        const date = day && month && year && new Date(year, month - 1, day);
        if (!date) {
            alert("chọn ngày đi ạ");
            return;
        }
        const url = new URL(`${BACKEND_URL}/checkins`);
        if (date) {
            url.searchParams.set("from", date.getTime());
            url.searchParams.set("to", date.getTime() + 1000 * 60 * 60 * 24);
        }
        const res = await fetch(url, {
            method: "GET",
            credentials: "include",
        })
        if (res.ok) {
            const body = await res.json();
            const newStatistics = {};
            for (const checkin of body) {
                const hour = new Date(checkin.createdAt).getHours();
                if (!(hour in newStatistics)) newStatistics[hour] = 0;
                newStatistics[hour]++;
            }
            setStatistics(newStatistics);
        } else {
            window.alert(await res.text());
        }
    }
    return (
        <>
            <div className={cx('top-wrapper-chart')}>
                <div className={cx('option-and-infor-wrapper-chart')}>
                    <div className={cx('option-wrapper-chart')}>
                        <Link className={cx('list-wrapper-chart')} to="/ThongKe">
                            Danh sách
                        </Link>
                        <Link className={cx('chart-wrapper-chart')} to="/BieuDo">
                            Biểu đồ
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('day-month-year-state-wrapper-chart')}>
                <div className={cx('day-month-year-state-chart')}>
                    <p>Biểu đồ thông kê số sinh viên vào thư viện</p>
                    <div className={cx('day-month-year-chart')}>
                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Ngày" spellCheck={false} onChange = {getDay}/>
                        </div>
                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Tháng" spellCheck={false} onChange = {getMonth}/>
                        </div>
                        <div className={cx('dmy-wrapper-chart')}>
                            <input type="text" placeholder="Năm" spellCheck={false} onChange = {getYear} />
                        </div>

                        <button onClick={handleWatch} className={cx('xem-ngay-wrapper-chart')}>
                            <div className={cx('text-xem-ngay-wrapper-chart')}>Xem ngay</div>
                        </button>
                    </div>
                    {statistics &&<p className={cx('text-today')}>Có {Object.values(statistics).reduce((a, c) => a + c, 0)} lượt vào thư viện </p>}
                </div>
            </div>

            {statistics && <div className={cx('bar-chart')}>
                <Bar
                    data={{
                        // Name of the variables on x-axies for each bar
                        labels: Object.keys(statistics).sort((a, b) => a - b).map(key => `${key}`.padStart(2, '0')).map(hour => `${hour}:00`),
                        datasets: [
                            {
                                // Label for bars
                                label: 'Số lượng sinh viên / Giờ',
                                // Data or value of your each variable
                                data: Object.values(statistics),
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
            </div>}
        </>
    );
}

export default Chartsta;
