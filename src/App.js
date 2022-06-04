import './App.css';
import Login from './pages/Dangnhap/Login';
import SignUp from './pages/DangKy/SignUp';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';
import List_sta from './pages/Liststatistics/List_sta';
import Chart_sta from './pages/Chartstatistic/Chartstatistic';
import ViTri from './pages/ViTri/ViTri';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import Manage from './pages/QuanLy/Manage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>

                    <Route
                        path="/"
                        element={
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
                                <List_sta />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/BieuDo"
                        element={
                            <DefaultLayout>
                                <Chart_sta />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/Signin"
                        element={
                            <div>
                                <Login />
                            </div>
                        }
                    />

                    <Route
                        path="/Manage"
                        element={
                            <DefaultLayout>
                                <Manage />
                            </DefaultLayout>
                        }
                    />
                    
                    <Route
                        exact
                        path="/SignUp"
                        element={
                            <div>
                                <SignUp />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
