import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <img src={movie.poster} alt={`Постер ${movie.title}`} className="poster-image" />
        <div className="rating-badge">★ {movie.rating}</div>
      </div>
      <div className="movie-info">
        <h4 className="movie-title">{movie.title}</h4>
        <div className="movie-meta">
          <span>{movie.year}</span> • <span>{movie.genre}</span>
        </div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </article>
  );
};

export default MovieCard;
