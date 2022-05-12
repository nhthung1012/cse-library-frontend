import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import QuetThe from './components/pages/quetThe/QuetThe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element />
          <Route exact path="/quet-the" element={<QuetThe/>}/>
          <Route path="/" element />
          <Route path="/" element />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
