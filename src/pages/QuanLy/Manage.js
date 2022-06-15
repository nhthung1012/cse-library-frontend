import classNames from 'classnames/bind';
import styles from './Manage.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// let notice = ['Thêm thành công', 'Sinh viên khoa khác'];

function Manage() {
    return (
        <>
            <div className={cx('dichuyen')}>
                <div className={cx('checkin-wrapper')}>
                    <div className={cx('checkin-inner')}>
                        <p>Tìm kiếm sinh viên:</p>
                        <div className={cx('checkin')}>
                            <input placeholder="Nhập mã số sinh viên" spellCheck={false} />
                            <button className={cx('checkin-btn')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('student-list')}>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2012345</div>
                            <div className={cx('student-name')}>Nguyễn Ngọc Anh</div>
                            <div className={cx('student-info-time')}></div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2014312</div>
                            <div className={cx('student-name')}>Trịnh Anh Đức</div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2012625</div>
                            <div className={cx('student-name')}>Nguyễn Lê Hiếu</div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2012625</div>
                            <div className={cx('student-name')}>Nguyễn Tiến Duy</div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2013307</div>
                            <div className={cx('student-name')}>Lê Thị Linh Chi</div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2013107</div>
                            <div className={cx('student-name')}>Nguyễn Đức Tuấn</div>
                        </div>
                        <button className={cx('student-settings')}>
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </button>
                        <div className={cx('dropdown')}>
                            <button className={cx('dropdown_select')} >
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                            <ul className={cx('dropdown_list')}> 
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Xóa thành viên
                                    </span>
                                </li>
                                <li className={cx('dropdown_item')}> 
                                    <span className={cx('dropdown_text')}> Thêm vào blacklist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('student')}>
                        <div className={cx('student-avatar')}></div>
                        <div className={cx('student-info')}>
                            <div className={cx('student-id')}>2011268</div>
                            <div className={cx('student-name')}>Đặng Minh Tâm</div>
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
                                    <span className={cx('dropdown_text')}> Xóa thành viên
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
            </div>
        </>
    );
}

export default Manage;

