import React from 'react';
import MovieCard from './MovieCard';
import CategoryFilter from './CategoryFilter';
import './MovieList.css';

const MovieList = ({ movies, categories, onToggleFavorite, filterMode, onFilterChange, onSelectMovie }) => {
  return (
    <section className="movie-list-section" id="movies">
      <div className="section-header">
        <h2>Новинки Marvel</h2>
        <CategoryFilter 
          categories={categories} 
          filterMode={filterMode} 
          onFilterChange={onFilterChange} 
        />
      </div>
      
      {movies.length === 0 ? (
        <div className="empty-state">
          <p>На жаль, за вибраною категорією/фільтром нічого не знайдено 😕</p>
          <button className="reset-btn" onClick={() => onFilterChange('Усі')}>Скинути фільтр</button>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onToggleFavorite={() => onToggleFavorite(movie.id)}
              onSelectMovie={() => onSelectMovie(movie)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieList;
