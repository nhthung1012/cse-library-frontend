import classNames from 'classnames/bind';
import styles from './ViTri.scss';
import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const position = 56;
let currSV = 16;

let seat = Array.from({length: 56}, () => false);

function ViTri() {
    const [nonEmpty, setNonEmpty] = useState(seat)
    const [state, setState] = useState({
        seat:-1,
        chosen:false
    });

    const handleNonEmpty = index => {
        if ( state.chosen===true ) {
            nonEmpty[state.seat] = !nonEmpty[state.seat];
        }
        if (nonEmpty[index] != true) nonEmpty[index] = !nonEmpty[index];
        setState({
            seat: index,
            chosen: true
        })
        setNonEmpty([...nonEmpty]);
    }

    return (
        <div className={cx('library-wrapper')}>
            <div className={cx('library-map')}>
                <h2>Sơ đồ thư viện</h2>
                <div className={cx('pos-wrapper')}>
                    <div className={cx('pos-grid')}>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[0]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 0)}></li>
                                    <li className={cx(nonEmpty[1]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 1)}></li>
                                    <li className={cx(nonEmpty[2]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 2)}></li>
                                    <li className={cx(nonEmpty[3]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 3)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[4]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 4)}></li>
                                    <li className={cx(nonEmpty[5]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 5)}></li>
                                    <li className={cx(nonEmpty[6]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 6)}></li>
                                    <li className={cx(nonEmpty[7]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 7)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[8]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 8)}></li>
                                    <li className={cx(nonEmpty[9]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 9)}></li>
                                    <li className={cx(nonEmpty[10]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 10)}></li>
                                    <li className={cx(nonEmpty[11]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 11)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[12]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 12)}></li>
                                    <li className={cx(nonEmpty[13]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 13)}></li>
                                    <li className={cx(nonEmpty[14]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 14)}></li>
                                    <li className={cx(nonEmpty[15]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 15)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                            <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[16]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 16)}></li>
                                    <li className={cx(nonEmpty[17]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 17)}></li>
                                    <li className={cx(nonEmpty[18]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 18)}></li>
                                    <li className={cx(nonEmpty[19]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 19)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[20]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 20)}></li>
                                    <li className={cx(nonEmpty[21]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 21)}></li>
                                    <li className={cx(nonEmpty[22]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 22)}></li>
                                    <li className={cx(nonEmpty[23]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 23)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[24]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 24)}></li>
                                    <li className={cx(nonEmpty[25]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 25)}></li>
                                    <li className={cx(nonEmpty[26]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 26)}></li>
                                    <li className={cx(nonEmpty[27]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 27)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[28]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 28)}></li>
                                    <li className={cx(nonEmpty[29]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 29)}></li>
                                    <li className={cx(nonEmpty[30]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 30)}></li>
                                    <li className={cx(nonEmpty[31]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 31)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[32]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 32)}></li>
                                    <li className={cx(nonEmpty[33]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 33)}></li>
                                    <li className={cx(nonEmpty[34]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 34)}></li>
                                    <li className={cx(nonEmpty[35]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 35)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[36]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 36)}></li>
                                    <li className={cx(nonEmpty[37]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 37)}></li>
                                    <li className={cx(nonEmpty[38]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 38)}></li>
                                    <li className={cx(nonEmpty[39]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 39)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[40]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 40)}></li>
                                    <li className={cx(nonEmpty[41]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 41)}></li>
                                    <li className={cx(nonEmpty[42]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 42)}></li>
                                    <li className={cx(nonEmpty[43]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 43)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[44]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 44)}></li>
                                    <li className={cx(nonEmpty[45]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 45)}></li>
                                    <li className={cx(nonEmpty[46]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 46)}></li>
                                    <li className={cx(nonEmpty[47]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 47)}></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                                <ul className={cx('seat-top')}>
                                    <li className={cx(nonEmpty[48]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 48)}></li>
                                    <li className={cx(nonEmpty[49]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 49)}></li>
                                    <li className={cx(nonEmpty[50]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 50)}></li>
                                    <li className={cx(nonEmpty[51]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 51)}></li>
                                </ul>
                                <div className={cx('table')}></div>
                                <ul className={cx('seat-bottom')}>
                                    <li className={cx(nonEmpty[52]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 52)}></li>
                                    <li className={cx(nonEmpty[53]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 53)}></li>
                                    <li className={cx(nonEmpty[54]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 54)}></li>
                                    <li className={cx(nonEmpty[55]?'seat':'seat-empty')} onClick={handleNonEmpty.bind(this, 55)}></li>
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
                    <button type="button" className={cx('status-btn')}>
                        Xác nhận chọn chỗ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViTri;