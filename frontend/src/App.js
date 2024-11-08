import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header'

import HomePage from './pages/homepage';
import Sports from './pages/sports';
import Sportcat from './pages/sport_categories';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/sports" element={<Sports />} />
        <Route path="/sportcat" element={<Sportcat />} />
      </Routes>
    </Router>
  );
}

export default App;