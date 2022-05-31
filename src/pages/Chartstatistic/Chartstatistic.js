import classNames from 'classnames/bind';
import styles from './Chartstatistic.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const cx = classNames.bind(styles);

let soluotravao = 73;

function List_sta() {
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
                <div className={cx('day-month-year-state')}>
                    <p>Biểu đồ thông kê lượt vào</p>
                    <div className={cx('day-month-year-chart')}>
                        <button className={cx('year-wrapper-chart')}>
                            Năm
                            <div className={cx('angle-down-ic-chart')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

                        <button className={cx('month-wrapper-chart')}>
                            Tháng
                            <div className={cx('angle-down-ic-chart')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

                        <button className={cx('day-wrapper-chart')}>
                            Ngày
                            <div className={cx('angle-down-ic-chart')}>
                                <FontAwesomeIcon icon={faAngleDown} />{' '}
                            </div>
                        </button>

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
                        labels: ['8', '9', '10', '11', '12', '13', '14', '15'],
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

export default List_sta;
