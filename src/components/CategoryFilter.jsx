import React from 'react';
import './MovieList.css';

const CategoryFilter = ({ categories }) => {
  return (
    <div className="category-filters">
      {categories.map(category => (
        <button 
          key={category} 
          className={`filter-button ${category === 'Усі' ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
