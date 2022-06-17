import styles from './ViTri.scss';

import classNames from 'classnames/bind';
import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const cx = classNames.bind(styles);

const position = 56;
let currSV = 16;

// Data of seats from db
let seats = Array.from({length: 56}, () => false);
seats[2] = true

let statSeats = Array.from({length: 56}, () => false);
let title = "";

function ViTri() {
    // Handle choose position
    const [emptySeat, setEmptySeat] = useState(statSeats)
    const [state, setState] = useState({
        seat:-1,
        chosen:false
    });

    for (let i = 0; i < 56; i++) {
        statSeats[i] = seats[i] || emptySeat[i];
    }

    const handleChoose = index => {
        if ( state.chosen === true ) emptySeat[state.seat] = !emptySeat[state.seat];
        emptySeat[index] = !emptySeat[index];
        setState({
            seat: index,
            chosen: true
        })
        setEmptySeat([...emptySeat]);
    }

    // Handle dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        seats[state.seat] = true;
        setOpen(false);
    };

    if (state.chosen === false && open) title = "Vui lòng chọn vị trí ngồi!";
    else if (seats[state.seat] === true && open) title = "Vị trí hiện tại đã có người ngồi!";
    else if (seats[state.seat] === false && open) title = "Xác nhận chọn ghế số "+(parseInt(state.seat)+1);

    return (
        <div className={cx('library-wrapper')}>
            <div className={cx('library-map')}>
                <h2>Sơ đồ thư viện</h2>
                <div className={cx('pos-wrapper')}>
                    <div className={cx('pos-grid')}>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[0]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 0)}></li>
                                    <li className={cx(statSeats[1]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 1)}></li>
                                    <li className={cx(statSeats[2]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 2)}></li>
                                    <li className={cx(statSeats[3]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 3)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[4]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 4)}></li>
                                    <li className={cx(statSeats[5]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 5)}></li>
                                    <li className={cx(statSeats[6]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 6)}></li>
                                    <li className={cx(statSeats[7]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 7)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[8]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 8)}></li>
                                    <li className={cx(statSeats[9]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 9)}></li>
                                    <li className={cx(statSeats[10]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 10)}></li>
                                    <li className={cx(statSeats[11]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 11)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[12]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 12)}></li>
                                    <li className={cx(statSeats[13]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 13)}></li>
                                    <li className={cx(statSeats[14]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 14)}></li>
                                    <li className={cx(statSeats[15]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 15)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[16]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 16)}></li>
                                    <li className={cx(statSeats[17]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 17)}></li>
                                    <li className={cx(statSeats[18]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 18)}></li>
                                    <li className={cx(statSeats[19]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 19)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[20]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 20)}></li>
                                    <li className={cx(statSeats[21]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 21)}></li>
                                    <li className={cx(statSeats[22]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 22)}></li>
                                    <li className={cx(statSeats[23]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 23)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[24]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 24)}></li>
                                    <li className={cx(statSeats[25]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 25)}></li>
                                    <li className={cx(statSeats[26]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 26)}></li>
                                    <li className={cx(statSeats[27]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 27)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[28]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 28)}></li>
                                    <li className={cx(statSeats[29]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 29)}></li>
                                    <li className={cx(statSeats[30]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 30)}></li>
                                    <li className={cx(statSeats[31]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 31)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[32]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 32)}></li>
                                    <li className={cx(statSeats[33]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 33)}></li>
                                    <li className={cx(statSeats[34]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 34)}></li>
                                    <li className={cx(statSeats[35]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 35)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[36]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 36)}></li>
                                    <li className={cx(statSeats[37]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 37)}></li>
                                    <li className={cx(statSeats[38]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 38)}></li>
                                    <li className={cx(statSeats[39]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 39)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[40]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 40)}></li>
                                    <li className={cx(statSeats[41]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 41)}></li>
                                    <li className={cx(statSeats[42]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 42)}></li>
                                    <li className={cx(statSeats[43]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 43)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[44]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 44)}></li>
                                    <li className={cx(statSeats[45]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 45)}></li>
                                    <li className={cx(statSeats[46]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 46)}></li>
                                    <li className={cx(statSeats[47]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 47)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(statSeats[48]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 48)}></li>
                                    <li className={cx(statSeats[49]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 49)}></li>
                                    <li className={cx(statSeats[50]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 50)}></li>
                                    <li className={cx(statSeats[51]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 51)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(statSeats[52]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 52)}></li>
                                    <li className={cx(statSeats[53]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 53)}></li>
                                    <li className={cx(statSeats[54]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 54)}></li>
                                    <li className={cx(statSeats[55]?'seat':'seat-empty')} onClick={handleChoose.bind(this, 55)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')} id="admin">
                                <div className={cx('admin-pos')}>
                                    <div className={cx('admin-table')}></div>
                                    <ul className={cx('seat-bottom')}>
                                        <li className={cx('seat')}></li>
                                    </ul>
                                    <p>Bàn điểm danh</p>
                                </div>
                                <div className={cx('door')}>
                                    Cửa ra vào
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('library-status')}>
                <div className={cx('status-display')}>
                    <div>
                        <div className={cx('status-display1')}>
                            <FontAwesomeIcon icon={faCircle} />
                            <p>Trống</p>
                        </div>
                        <div className={cx('status-display2')}>
                            <FontAwesomeIcon icon={faCircle} />
                            <p>Đã có người</p>
                        </div>
                    </div>
                </div>
                <div className={cx('status-text')}>
                    <div className={cx('status-student')}>
                        <p>Thư viện hiện có: {currSV} SV</p>
                    </div>
                    <div className={cx('status-position')}>
                        <p>Vị trí trống: {position - currSV}</p>
                    </div>
                </div>
                <div className={cx('status-btn-wrapper')}>
                    <button type="button" className={cx('status-btn')} onClick={handleClickOpen}>
                        Xác nhận chọn chỗ
                    </button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                {state.chosen === true && seats[state.seat] === false ? (
                    <DialogActions>
                        <Button onClick={handleClose}>Từ chối</Button>
                        <Button onClick={handleSubmit} autoFocus>
                            Xác nhận
                        </Button>
                    </DialogActions>
                 ) : (
                        <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Xác nhận
                        </Button>
                    </DialogActions>
                 )
                }
            </Dialog>
        </div>
    );
}

export default ViTri;