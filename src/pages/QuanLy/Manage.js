import classNames from 'classnames/bind';
import styles from './Manage.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faCircleInfo, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BACKEND_URL } from '../../utils/constants';

const cx = classNames.bind(styles);

var liststudents = [];

function blacklisted(stu) {
    return stu.blacklist && (!stu.blacklist.expiredAt || new Date() < new Date(stu.blacklist.expiredAt));
}


function Manage() {
    const [users, setUsers] = useState();
    const [invalidate, setInvalidate] = useState(true);

    useEffect(() => {
        if (invalidate) {
            fetch(`${BACKEND_URL}/users`, { credentials: 'include' }).then(async res => {
                if (res.ok) {
                    const body = await res.json();
                    const users = body.map(user => ({
                        ...user,
                        name: user.lname + ' ' + user.fname,
                    }));
                    setUsers(users);
                    setShowList(users);
                    setInvalidate(false);
                } else {
                    alert(await res.text());
                }
            })
        }
    }, [invalidate])

    const [IDtoFind,setIDtoFind] = useState(null)
    const [showList,setShowList] = useState(liststudents)

    const [open_Del, setOpen_Del] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen_Del = (stu) => {
        setOpen_Del(true);
        liststudents = liststudents.filter(item => item.id !== stu.id)
    };
    const handleClose_Del = () => {
        setOpen_Del(false);
        setShowList(liststudents)
    };

    const handleClickOpen = async (stu) => {
        setOpen(true);
        await fetch(`${BACKEND_URL}/blacklist/${stu.id}`, { method: blacklisted(stu) ? 'DELETE' : 'POST', credentials: 'include' })
        setInvalidate(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function getIDtoFind (val){
        setIDtoFind(val.target.value)
    }
    function handleFindID (){
        if (!IDtoFind) {
            setShowList(users);
        } else {
            setShowList(users.filter(stu => stu.id == IDtoFind))
        }
    }
    // const handleDelete = (stu) => {
    //     liststudents = liststudents.filter(item => item.id !== stu.id)
    //     setShowList(liststudents)
    // }
    return (
        <>
            <div className={cx('dichuyen')}>
                <div className={cx('checkin-wrapper')}>
                    <div className={cx('checkin-inner')}>
                        <p>T??m ki???m sinh vi??n:</p>
                        <div className={cx('checkin')}>
                            <input type = "text" placeholder="Nh???p m?? s??? sinh vi??n" spellCheck={false} onChange = {getIDtoFind}/>
                            <button onClick={handleFindID} className={cx('checkin-btn')}>
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                {showList.map((stu) => {
                     return <div key={stu.id} className={cx('student-list')}>
                        <div className={cx('student')}>
                            <div className={cx('student-avatar')}></div>
                            <div className={cx('student-info')}>
                                <div className={cx('student-id')}>{stu.id}</div>
                                <div className={cx('student-name')}
                                    style={{textDecoration: blacklisted(stu) ? "line-through" : ""}}
                                >{stu.name}</div>
                            </div>
                            <button className={cx('student-settings')}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </button>
                            <div className={cx('dropdown')}>
                                <button className={cx('dropdown_select')}>
                                    <FontAwesomeIcon icon={faGear} />
                                </button>
                                <ul className={cx('dropdown_list')}>
                                    {/* <li className={cx('dropdown_item')}>
                                        <span onClick={() => handleClickOpen_Del(stu)} className={cx('dropdown_text')}> X??a th??nh vi??n
                                        </span>
                                    </li> */}
                                    <li className={cx('dropdown_item')}>
                                        <span onClick={ () => handleClickOpen(stu)} className={cx('dropdown_text')}>{blacklisted(stu) ? "X??a black list" : "Th??m v??o blacklist"}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div >
                            <Dialog
                                open={open_Del}
                                onClose={() => handleClose_Del(stu)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"CSE Library - Qu???n l??"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <p className={cx('text-style-noti')} >B???n ???? xo?? sinh vi??n th??nh c??ng</p>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => handleClose_Del()} autoFocus>
                                    <p className={cx('confirm-style-noti')}>X??c Nh???n</p>
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        <div >
                            <Dialog
                                open={open}
                                onClose={() => handleClose(stu)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"CSE Library - Qu???n l??"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <p className={cx('text-style-noti')} >Sinh vi??n ???? ???????c {blacklisted(stu) ? "x??a kh???i" : "th??m v??o" } Blacklist</p>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => handleClose()} autoFocus>
                                    <p className={cx('confirm-style-noti')}>X??c Nh???n</p>
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>


                    </div>
                })}
                </div>

            </div>
        </>
    );
}

export default Manage;
