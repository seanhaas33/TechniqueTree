import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="title">Technique Tree</h1>
      <div className="logo">
        <img src="/logo_clear.png" alt="Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;