import classNames from 'classnames/bind';
import styles from './Manage.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faCircleInfo, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const cx = classNames.bind(styles);

var studentinfor = {
    name: 'Trần Long Biên',
    id: '2010924',
}
var st = {
    name: 'Trần Diệp Anh',
    id: '2010162'
}
var liststudnets = [studentinfor,studentinfor,studentinfor];


function Manage() {
    const [IDtoFind,setIDtoFind] = useState(null)
    const [showList,setShowList] = useState(liststudnets)
    const [showNoti,setShowNoti] = useState(false)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function getIDtoFind (val){
        setIDtoFind(val.target.value)
    }
    function handleFindID (){
        st.id = IDtoFind
        liststudnets = [st]
        setShowList(liststudnets)
    }
    return (
        <>
            <div className={cx('dichuyen')}>
                <div className={cx('checkin-wrapper')}>
                    <div className={cx('checkin-inner')}>
                        <p>Tìm kiếm sinh viên:</p>
                        <div className={cx('checkin')}>
                            <input type = "text" placeholder="Nhập mã số sinh viên" spellCheck={false} onChange = {getIDtoFind}/>
                            <button onClick={handleFindID} className={cx('checkin-btn')}>
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </button>
                        </div>
                    </div>
                </div>

                <div >
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"CSE Library - Quản lý"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <p className={cx('text-style-noti')} >Bạn đã xoá sinh viên thành công</p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            <p className={cx('confirm-style-noti')}>Xác Nhận</p>
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div>
                {showList.map((stu) => {
                     return <div className={cx('student-list')}>
                        <div className={cx('student')}>
                            <div className={cx('student-avatar')}></div>
                            <div className={cx('student-info')}>
                                <div className={cx('student-id')}>{stu.id}</div>
                                <div className={cx('student-name')}>{stu.name}</div>
                            </div>
                            <button className={cx('student-settings')}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </button>
                            <div className={cx('dropdown')}>
                                <button className={cx('dropdown_select')}>
                                    <FontAwesomeIcon icon={faGear} />
                                </button>
                                <ul className={cx('dropdown_list')}> 
                                    <li className={cx('dropdown_item')}> 
                                        <span onClick={handleClickOpen} className={cx('dropdown_text')}> Xóa thành viên
                                        </span>
                                    </li>
                                    <li className={cx('dropdown_item')}> 
                                        <span className={cx('dropdown_text')}> Thêm vào blacklist
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                })}
                </div>

            </div>
        </>
    );
}

export default Manage;

