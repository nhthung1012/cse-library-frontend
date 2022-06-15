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

var studentinfor_1 = {
    name: 'Trần Long Biên',
    id: 2010924,
}

var studentinfor_2 = {
    name: 'Trần Long Biên',
    id: 2010925
}

var studentinfor_3 = {
    name: 'Trần Long Biên',
    id: 2010926
}

var st = {
    name: 'Trần Diệp Anh',
    id: '2010162'
}
var liststudents = [studentinfor_1,studentinfor_2,studentinfor_3];


function Manage() {
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

    const handleClickOpen = (stu) => {
        setOpen(true);
        liststudents = liststudents.filter(item => item.id !== stu.id)
    };

    const handleClose = () => {
        setOpen(false);
        setShowList(liststudents)
    };

    function getIDtoFind (val){
        setIDtoFind(val.target.value)
    }
    function handleFindID (){
        st.id = IDtoFind
        liststudents = [st]
        setShowList(liststudents)
    }
    const handleDelete = (stu) => {
        liststudents = liststudents.filter(item => item.id !== stu.id)
        setShowList(liststudents)
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

                <div>
                {showList.map((stu) => {
                     return <div key={stu.id} className={cx('student-list')}>
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
                                        <span onClick={() => handleClickOpen_Del(stu)} className={cx('dropdown_text')}> Xóa thành viên
                                        </span>
                                    </li>
                                    <li className={cx('dropdown_item')}> 
                                        <span onClick={ () => handleClickOpen(stu)} className={cx('dropdown_text')}> Thêm vào blacklist
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
                                {"CSE Library - Quản lý"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <p className={cx('text-style-noti')} >Bạn đã xoá sinh viên thành công</p>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => handleClose_Del()} autoFocus>
                                    <p className={cx('confirm-style-noti')}>Xác Nhận</p>
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
                                {"CSE Library - Quản lý"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <p className={cx('text-style-noti')} >Sinh viên đã được thêm vào Blacklist</p>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => handleClose()} autoFocus>
                                    <p className={cx('confirm-style-noti')}>Xác Nhận</p>
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

