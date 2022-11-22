import React,{useEffect} from 'react';

import { Container } from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';

function App() {
  

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/auth" exact element={<Auth />}/>
        </Routes>
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
