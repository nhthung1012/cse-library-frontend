import './App.css';
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
import { UserContext } from './hooks/user';

function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setTimeout(() => setUser({
            name: 'Trần Ngọc Bảo Duy',
            role: 'student',
        }), 5000)
    }, [])

    return (
        <UserContext.Provider value={user}>
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
