import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent';
import HomePageComponent from './Components/Pages/HomePageComponent';
import CrunchyRollComponent from './Components/Pages/CrunchyRollComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path='/' element={<HomePageComponent />}/>
          <Route path='/crunchyroll' element={<CrunchyRollComponent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
