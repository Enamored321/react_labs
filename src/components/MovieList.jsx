import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';
import ironmanPoster from '../assets/posters/ironman.jpg';
import avengersPoster from '../assets/posters/avengers.jpg';
import spidermanPoster from '../assets/posters/spiderman.jpg';
import guardiansPoster from '../assets/posters/guardians.jpg';
import lokiPoster from '../assets/posters/loki.jpg';
import wandavisionPoster from '../assets/posters/wandavision.jpg';

const MovieList = () => {
  const [filter, setFilter] = useState('Усі');

  const movies = [
    {
      id: 1,
      title: 'Залізна людина',
      poster: ironmanPoster,
      rating: 7.9,
      genre: 'Фантастика',
      year: '2008',
      description: 'Геніальний мільярдер-винахідник Тоні Старк створює високотехнологічний залізний костюм.'
    },
    {
      id: 2,
      title: 'Месники',
      poster: avengersPoster,
      rating: 8.0,
      genre: 'Екшн',
      year: '2012',
      description: 'Наймогутніші герої Землі об\'єднуються, щоб зупинити Локі та його інопланетну армію.'
    },
    {
      id: 3,
      title: 'Людина-павук: Додому шляху нема',
      poster: spidermanPoster,
      rating: 8.2,
      genre: 'Екшн',
      year: '2021',
      description: 'Пітер Паркер звертається до Доктора Стренджа по допомогу, що призводить до мультивсесвітньої кризи.'
    },
    {
      id: 4,
      title: 'Вартові галактики',
      poster: guardiansPoster,
      rating: 8.0,
      genre: 'Фантастика',
      year: '2014',
      description: 'Група міжгалактичних злочинців змушена об\'єднатися задля порятунку всесвіту.'
    },
    {
      id: 5,
      title: 'Локі',
      poster: lokiPoster,
      rating: 8.2,
      genre: 'Серіал',
      year: '2021',
      description: 'Пригоди бога бешкетництва в таємничому Управлінні часовими змінами.'
    },
    {
      id: 6,
      title: 'ВандаВіжн',
      poster: wandavisionPoster,
      rating: 7.9,
      genre: 'Серіал',
      year: '2021',
      description: 'Ванда і Віжн живуть ідеальним приміським життям, але починають підозрювати щось дивне.'
    }
  ];

  const categories = ['Усі', 'Екшн', 'Фантастика', 'Серіал'];

  const filteredMovies = filter === 'Усі' 
    ? movies 
    : movies.filter(movie => movie.genre === filter);

  return (
    <section className="movie-list-section" id="movies">
      <div className="section-header">
        <h2>Новинки Marvel</h2>
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="movie-grid">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
