import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null; // Умовний рендеринг: якщо немає фільму, нічого не виводимо

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрити">×</button>
        <div className="modal-body">
          <img src={movie.poster} alt={movie.title} className="modal-poster" />
          <div className="modal-info">
            <h2>{movie.title}</h2>
            <div className="modal-meta">
              <span className="rating-text">★ {movie.rating}</span>
              <span>{movie.year}</span>
              <span>{movie.genre}</span>
            </div>
            <p className="modal-description">{movie.description}</p>
            <button className="trailer-btn">▶ Дивитись трейлер</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
