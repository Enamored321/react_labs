import React from 'react';
import './MovieList.css';

const CategoryFilter = ({ categories, filterMode, onFilterChange }) => {
  return (
    <div className="category-filters">
      {categories.map(category => (
        <button 
          key={category} 
          className={`filter-button ${category === filterMode ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
