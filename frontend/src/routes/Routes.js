import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/loginPage';

function App() {
  return (
   <BrowserRouter>
   <Routes >
     <Route exact path="/sesion" element={<Dashboard/>} />
     <Route exact path="/" element={<Login />} />
   </Routes >
   </BrowserRouter>
  );
}

export default App;
