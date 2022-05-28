import './App.css';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';
import List_sta from './pages/Liststatistics/List_sta';
import Chart_sta from './pages/Chartstatistic/Chartstatistic';
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
                        path="/quet-the"
                        element={
                            <DefaultLayout>
                                <QuetThe />
                            </DefaultLayout>
                        }
                    />

                    <Route 
                        path="/thong-ke" 
                        element={
                            <DefaultLayout>
                                <List_sta />
                            </DefaultLayout>
                        } 
                    />

                    <Route 
                        path="/bieu-do" 
                        element={
                            <DefaultLayout>
                                <Chart_sta />
                            </DefaultLayout>
                        } 
                    />

                </Routes>
            </div>
        </BrowserRouter>
        
    );
}

export default App;
