import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <span className="featured-badge">Рекомендовано</span>
        <h2 className="banner-title">Месники: Війна нескінченності</h2>
        <p className="banner-description">
          Найбільше зіткнення у всесвіті Marvel. Месники та їхні союзники повинні пожертвувати всім, щоб перемогти могутнього Таноса, перш ніж його руйнівний наступ знищить половину всесвіту.
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
