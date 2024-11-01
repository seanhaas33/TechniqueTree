import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Description Section */}
      <section className="description-section">
        <p className="description">
        Technique Tree aims to change how athletes and coaches learn about their sport. 
        With no financial or geographical limitations, information will be accessible to all. 
        With its intuitive layout, it outperforms current video sharing platforms. 
        The tree-like display demonstrates which knowledge is essential for one's sport, and what 
        they can subsequently learn. Users can see and evaluate their progress in various areas of 
        their sport. A rating system, comments, and video replies will allow users to give their input 
        and allow demonstrators to enhance users’ understanding of their content. 
        Top athletes and coaches will have their own exclusive series. This could start with RPI athletes 
        and expand as the user base grows. The site will start with specific athletes, and eventually, 
        anybody will be able to create their own series. Whether coaches want to format their teachings to 
        their team, or any individual wants their knowledge shared, it will be possible through Technique Tree.
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