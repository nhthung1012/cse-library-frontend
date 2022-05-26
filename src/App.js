import './App.css';
import Login from './pages/Dangnhap/Login';
import SignUp from './pages/DangKy/SignUp';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';

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
                        path="/QuetThe"
                        element={
                            <DefaultLayout>
                                <QuetThe />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/Login"
                        element={
                            <div>
                                <Login />
                            </div>
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
