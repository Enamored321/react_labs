import React from 'react';
import MovieCard from './MovieCard';
import CategoryFilter from './CategoryFilter';
import './MovieList.css';

const MovieList = ({ movies, categories, onToggleFavorite }) => {
  return (
    <section className="movie-list-section" id="movies">
      <div className="section-header">
        <h2>Новинки Marvel</h2>
        <CategoryFilter categories={categories} />
      </div>
      
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onToggleFavorite={() => onToggleFavorite(movie.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
