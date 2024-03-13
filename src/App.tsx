import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent';

function App() {
  return (
    <div>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={''}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
