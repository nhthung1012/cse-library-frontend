import classNames from 'classnames/bind';
import styles from './ViTri.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const position = 56;
let currSV = 16;

function ViTri() {
    return (
        <div className={cx('library-wrapper')}>
            <div className={cx('library-map')}>
                <h2>Sơ đồ thư viện</h2>
                <div className={cx('pos-grid')}>
                    <div className={cx('pos')}>
                        <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('pos')}>
                    <div className={cx('pos-inner')}>
                            <ul className={cx('seat-top')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                            </ul>
                            <div className={cx('table')}></div>
                            <ul className={cx('seat-bottom')}>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
                                <li className={cx('seat')}></li>
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
