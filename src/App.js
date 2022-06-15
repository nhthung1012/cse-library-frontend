import './App.css';
import Login from './pages/Dangnhap/Login';
import SignUp from './pages/DangKy/SignUp';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';
import Liststa from './pages/Liststatistics/Liststa';
import Chartsta from './pages/Chartstatistic/Chartstatistic';
import ViTri from './pages/ViTri/ViTri';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import Manage from './pages/QuanLy/Manage';
import { Link } from "react-router-dom";


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
    );
}

export default App;
