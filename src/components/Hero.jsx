import React from 'react';
import './Hero.css';

const Hero = ({ movie }) => {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <span className="featured-badge">Рекомендовано</span>
        <h2 className="banner-title">{movie.title}</h2>
        <p className="banner-description">
          {movie.description}
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">Дивитись</button>
          <button className="btn-secondary">Більше інформації</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
