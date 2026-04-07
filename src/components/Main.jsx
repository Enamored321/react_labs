import React from 'react';
import Hero from './Hero';
import MovieList from './MovieList';

const Main = ({ movies, featuredMovie, categories }) => {
  return (
    <main className="main-content">
      <Hero movie={featuredMovie} />
      <MovieList movies={movies} categories={categories} />
    </main>
  );
};

export default Main;
