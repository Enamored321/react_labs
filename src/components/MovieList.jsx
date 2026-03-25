import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = () => {
  const defaultMovies = [
    {
      id: 1,
      title: 'Spider-Man',
      poster: 'https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akQEaAXL6x0.jpg',
      rating: 7.4,
      description: 'Звичайний старшокласник Пітер Паркер отримує надлюдські здібності після укусу радіоактивного павука і стає супергероєм, що захищає місто.'
    },
    {
      id: 2,
      title: 'Iron Man',
      poster: 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
      rating: 7.9,
      description: 'Геніальний мільярдер-винахідник Тоні Старк створює високотехнологічний залізний костюм, щоб врятувати своє життя та боротися з терористами.'
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: 8.6,
      description: 'Команда дослідників мандрує крізь червоточину в далекому космосі, намагаючись знайти новий придатний для життя дім і врятувати людство.'
    },
    {
      id: 4,
      title: 'The Matrix',
      poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      rating: 8.7,
      description: 'Звичайний програміст Нео дізнається шокуючу правду: весь звичний світ є лише грандіозною комп\'ютерною симуляцією штучного інтелекту.'
    }
  ];

  return (
    <main className="main-content">
      <h2>Популярні фільми</h2>
      
      <div className="filters">
        <button className="active">Усі</button>
        <button>Екшн</button>
        <button>Фантастика</button>
        <button>Драма</button>
      </div>

      <div className="movies-grid">
        {defaultMovies.map((movie) => (
          <MovieCard 
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>
    </main>
  );
};

export default MovieList;
