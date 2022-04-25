import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    setTimeout (() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div className="App">
      {loading === true ?
      <LandingPage/> :
    <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<footer/>}/> */}
        </Routes>
    </BrowserRouter>
      }
      <Footer/>
      </div>
  );
}

export default App;
