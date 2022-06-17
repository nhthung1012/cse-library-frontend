import classNames from 'classnames/bind';
import styles from './QuetThe.scss';
import Loader from '../../components/Loader/Loader'
import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faClock } from '@fortawesome/free-solid-svg-icons';
import { BACKEND_URL } from '../../utils/constants';

const cx = classNames.bind(styles);

// Create demo student's list of KH&KTMT HCMUT
const userList = [
    {
        name: 'Nguyễn Văn A',
        id: '2012345',
    },
    {
        name: 'Nguyễn Văn B',
        id: '2012346',
    },
    {
        name: 'Nguyễn Văn C',
        id: '2012347',
    },
    {
        name: 'Nguyễn Văn D',
        id: '2012348',
    },
    {
        name: 'Nguyễn Văn E',
        id: '2012349',
    },
    {
        name: 'Nguyễn Văn F',
        id: '2012350',
    },
]

// Format time to am/pm
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return strTime;
}

function toUser(checkin) {
    return {
        id: checkin.user.id,
        time: formatAMPM(new Date(checkin.createdAt)),
        name: checkin.user.lname + ' ' + checkin.user.fname,
    }
}

function QuetThe() {

    const [users, setUsers] = useState();

    const [invalidate, setInvalidate] = useState(true);
    useEffect(() => {
        if (invalidate) {
            fetch(`${BACKEND_URL}/checkins?checkout=true`).then(async res => {
                if (res.ok) {
                    const seats = await res.json();
                    setUsers(seats.map(toUser))
                } else {
                    alert(await res.text());
                }
                setInvalidate(false);
            })
        }
    }, [invalidate])

    useEffect(() => {
        console.log(users);
    }, [users])

    //Checkout function
    const checkOut = async id => {
        try {
            console.log(id);
            const res = await fetch(`${BACKEND_URL}/user/${id}/checkout`, {
                method: "POST",
                credentials: "include",
            })
            if (res.ok) {
                setInvalidate(true);
                window.alert('Check out thành công!');
            } else {
                window.alert(await res.text());
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    //Checkin function
    const checkIn = async () => {
        try {
            let id = document.getElementById('input').value;
            // if (users.find(data => data.id === id) !== undefined) {
            //     window.alert('Sinh viên đã ở trong thư viện!')
            //     throw new Error('User already exists');
            // }
            // let user = userList.find(data => data.id === id);
            // if (user === undefined) {
            //     window.alert('Sinh viên không thuộc khoa Máy tính!')
            //     throw new Error('User not found');
            // }
            const res = await fetch(`${BACKEND_URL}/user/${id}/checkin`, {
                method: "POST",
                credentials: "include",
            })
            if (res.ok) {
                setInvalidate(true);
                window.alert('Check in thành công!');
            } else {
                window.alert(await res.text());
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    if (!users) {
        return <div><Loader /></div>
    }

    return (
        <>
            <div className={cx('checkin-wrapper')}>
                <div className={cx('checkin-inner')}>
                    <p>Số sinh viên hiện tại: {users.length}</p>
                    <div className={cx('checkin')}>
                        <input type="text" placeholder="Nhập mã số sinh viên" spellCheck={false} id='input'/>
                        <button className={cx('checkin-btn')} onClick={checkIn}>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('student-list')}>
                {users.map(user => {
                    return (
                        <div className={cx('student')} key={user.id}>
                            <div className={cx('student-avatar')}></div>
                            <div className={cx('student-info')}>
                                <div className={cx('student-id')}>{user.id}</div>
                                <div className={cx('student-name')}>{user.name}</div>
                                <div className={cx('student-info-time')}>
                                    <FontAwesomeIcon icon={faClock} />
                                    <p>{user.time}</p>
                                </div>
                            </div>
                            <button className={cx('student-settings')} onClick={checkOut.bind(this, user.id)}>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default QuetThe;
