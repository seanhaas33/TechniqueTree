import React from 'react';
import { Link } from 'react-router-dom';
import './sport_categories.css';

const Sportcat = () => {
  // Define sport skill categories
  const skillCategories = [
    { name: 'Dribbling', path: '/dribbling' },
    { name: 'Shooting', path: '/shooting' },
    { name: 'Passing', path: '/passing' },
    { name: 'Defending', path: '/defending' },
    { name: 'Goalkeeping', path: '/goalkeeping' },
  ];

  return (
    <div className="categories-container">
      <h1>Select a Skill Category</h1>
      <div className="buttons-container">
        {skillCategories.map((category, index) => (
          <Link to={category.path} key={index} className="skill-button">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sportcat;