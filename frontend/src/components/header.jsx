import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
         <h1 className="title">Technique Tree</h1>
        <div className="logo">Logo</div>
    </header>
    
  );
};

export default Header;