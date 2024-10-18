import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Technique Tree</h1>
        <div className="logo">Logo</div>
      </header>

      {/* Description Section */}
      <section className="description-section">
        <p className="description">
          This is a description paragraph that gives an overview of Technique Tree. You can put your main content here.
        </p>
      </section>

      {/* Circular Buttons Section */}
      <section className="buttons-section">
        <div className="button">
          <span>View Content</span>
        </div>
        <div className="button">
          <span>Create Account</span>
        </div>
        <div className="button">
          <span>Maybe Other</span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;