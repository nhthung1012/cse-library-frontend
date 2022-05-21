import './App.css';
import QuetThe from './pages/quetThe/QuetThe';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
            <Route path="/" element />
            <Route path="/quet-the" element = {<QuetThe />} />
            <Route path="/" element />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
