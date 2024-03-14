import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent';
import HomePageComponent from './Components/Pages/HomePageComponent';
import CrunchyRollComponent from './Components/Pages/CrunchyRollComponent';
import FigmaComponent from './Components/Pages/FigmaComponent';
import GitHubComponent from './Components/Pages/GitHubComponent';
import NikeComponent from './Components/Pages/NikeComponent';
import OpenAIComponent from './Components/Pages/OpenAIComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path='/' element={<HomePageComponent />}/>
          <Route path='/crunchyroll' element={<CrunchyRollComponent />}/>
          <Route path='/figma' element={<FigmaComponent />}/>
          <Route path='/github' element={<GitHubComponent />}/>
          <Route path='/nike' element={<NikeComponent />}/>
          <Route path='/openai' element={<OpenAIComponent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
