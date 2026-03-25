import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster, rating, description }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <span className="rating">Оцінка: {rating}/10</span>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
