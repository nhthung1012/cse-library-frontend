import styles from './App.scss';
import Login from './pages/Dangnhap/Login';
import SignUp from './pages/DangKy/SignUp';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';
import Liststa from './pages/Liststatistics/Liststa';
import Chartsta from './pages/Chartstatistic/Chartstatistic';
import ViTri from './pages/ViTri/ViTri';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import UnSigninLayout from './components/Layouts/UnSigninLayout/UnSigninLayout';
import Manage from './pages/QuanLy/Manage';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import { UserContext } from './hooks/user';
import { BACKEND_URL } from './utils/constants';

const cx = classNames.bind(styles);

function App() {
    const [user, setUser] = useState(undefined);

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (loaded) return;
        fetch(`${BACKEND_URL}/user`, { credentials: 'include' })
            .then(async res => {
                if (res.ok) {
                    const body = await res.json();
                    setUser({
                        name: body.lname + ' ' + body.fname,
                        role: body.admin === null ? 'student' : 'admin'
                    })
                }
                setLoaded(true);
        });
    }, [])

    if (!loaded) {
        return (
            <UnSigninLayout>
                <div className={cx("loader-wrapper")}>
                    <div className={cx("loader")}></div>
                </div>
            </UnSigninLayout>
        )
    }

    return (
        <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={(user === undefined)?
                                <UnSigninLayout>
                                    <Home />
                                </UnSigninLayout>:
                                <DefaultLayout>
                                    <Home />
                                </DefaultLayout>
                        }
                    />

                    <Route
                        path="/ViTri"
                        element={
                            <DefaultLayout>
                                <ViTri />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/QuetThe"
                        element={
                            <DefaultLayout>
                                <QuetThe />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/ThongKe"
                        element={
                            <DefaultLayout>
                                <Liststa />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/BieuDo"
                        element={
                            <DefaultLayout>
                                <Chartsta />
                            </DefaultLayout>
                        }
                    />

                    <Route path="/SignIn" element={<Login />} />

                    <Route
                        path="/Manage"
                        element={
                            <DefaultLayout>
                                <Manage />
                            </DefaultLayout>
                        }
                    />

                    <Route exact path="/SignUp" element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
