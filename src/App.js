import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Lectii from './components/pages/Lectii'
import Lectia1 from './components/pages/lectii/lectia1'
import Lectia11 from './components/pages/lectii/lectia11';
import Lectia12 from './components/pages/lectii/lectia12';
import Lectia2 from './components/pages/lectii/lectia2'
import Lectia3 from './components/pages/lectii/lectia3'
import Lectia32 from './components/pages/lectii/lectia32'
import Lectia33 from './components/pages/lectii/lectia33'
import Lectia4 from './components/pages/lectii/lectia4';
import Lectia5 from './components/pages/lectii/lectia5';
import Lectia52 from './components/pages/lectii/lectia52';
import Lectia53 from './components/pages/lectii/lectia53';
import Lectia6 from './components/pages/lectii/lectia6';

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Lectii' element={<Lectii/>} />
          <Route path='/Lectii/Lectia1' element={<Lectia1/>} />
          <Route path='/Lectii/Lectia11' element={<Lectia11/>} />
          <Route path='/Lectii/Lectia12' element={<Lectia12/>} />
          <Route path='/Lectii/Lectia2' element={<Lectia2/>} />
          <Route path='/Lectii/Lectia3' element={<Lectia3/>} />
          <Route path='/Lectii/Lectia32' element={<Lectia32/>} />
          <Route path='/Lectii/Lectia33' element={<Lectia33/>} />
          <Route path='/Lectii/Lectia4' element={<Lectia4/>} />
          <Route path='/Lectii/Lectia5' element={<Lectia5/>} />
          <Route path='/Lectii/Lectia52' element={<Lectia52/>} />
          <Route path='/Lectii/Lectia53' element={<Lectia53/>} />
          <Route path='/Lectii/Lectia6' element={<Lectia6/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
