import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onToggleFavorite }) => {
  return (
    <article className={`movie-card ${movie.isFavorite ? 'favorite' : ''}`}>
      <div className="poster-wrapper">
        <img src={movie.poster} alt={`Постер ${movie.title}`} className="poster-image" />
        <div className="rating-badge">★ {movie.rating}</div>
        <button 
          className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          aria-label="В обране"
        >
          {movie.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h4 className="movie-title">
          {movie.title}
          {movie.isFavorite && <span className="fav-badge">Обране</span>}
        </h4>
        <div className="movie-meta">
          <span>{movie.year}</span> • <span>{movie.genre}</span>
        </div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </article>
  );
};

export default MovieCard;
