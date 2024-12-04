import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sport_categories.css';

const Sportcat = () => {
  // Initial skill categories
  const initialCategories = [
    { name: 'Dribbling', path: '/dribbling', description: 'Improve ball control and handling.' },
    { name: 'Shooting', path: '/shooting', description: 'Learn techniques for accurate shooting.' },
    { name: 'Passing', path: '/passing', description: 'Master the art of passing the ball effectively.' },
    { name: 'Defending', path: '/defending', description: 'Enhance your defensive skills.' },
    { name: 'Goalkeeping', path: '/goalkeeping', description: 'Develop your goalkeeping techniques.' },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  // Filtered categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new category
  const handleAddCategory = () => {
    if (newCategory.name && newCategory.description) {
      setCategories([
        ...categories,
        { ...newCategory, path: `/${newCategory.name.toLowerCase().replace(/\s+/g, '-')}` },
      ]);
      setNewCategory({ name: '', description: '' });
    }
  };

  return (
    <div className="categories-container">
      <h1 className="fade-in">Select a Skill Category</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search categories..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Buttons Container */}
      <div className="buttons-container slide-in">
        {filteredCategories.map((category, index) => (
          <Link to={category.path} key={index} className="skill-button grow" title={category.description}>
            {category.name}
          </Link>
        ))}
      </div>

      {/* Add Category Section */}
      <div className="add-category-container">
        <h2>Add a New Skill Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          className="input-field"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category Description"
          className="input-field"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <button className="add-button" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default Sportcat;