import React from 'react';
import Hero from './Hero';
import MovieList from './MovieList';

const Main = ({ movies, featuredMovie, categories, onToggleFavorite, filterMode, onFilterChange, onSelectMovie }) => {
  return (
    <main className="main-content">
      <Hero movie={featuredMovie} />
      <MovieList 
        movies={movies} 
        categories={categories} 
        onToggleFavorite={onToggleFavorite} 
        filterMode={filterMode}
        onFilterChange={onFilterChange}
        onSelectMovie={onSelectMovie}
      />
    </main>
  );
};

export default Main;
