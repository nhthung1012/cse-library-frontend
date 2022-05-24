import './App.css';
import QuetThe from './pages/quetThe/QuetThe';
import Home from './pages/Home/Home';
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
                    <Route path="/" element />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
