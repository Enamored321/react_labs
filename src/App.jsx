import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import MovieModal from './components/MovieModal';


// Імпорт зображень (постерів)
import ironmanPoster from './assets/posters/ironman.jpg';
import avengersPoster from './assets/posters/avengers.jpg';
import spidermanPoster from './assets/posters/spiderman.jpg';
import guardiansPoster from './assets/posters/guardians.jpg';
import lokiPoster from './assets/posters/loki.jpg';
import wandavisionPoster from './assets/posters/wandavision.jpg';

const App = () => {
  // Початкові дані (стан визначено через useState)
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Залізна людина',
      poster: ironmanPoster,
      rating: 7.9,
      genre: 'Фантастика',
      year: '2008',
      description: 'Геніальний мільярдер-винахідник Тоні Старк створює високотехнологічний залізний костюм.',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Месники',
      poster: avengersPoster,
      rating: 8.0,
      genre: 'Екшн',
      year: '2012',
      description: 'Наймогутніші герої Землі об\'єднуються, щоб зупинити Локі та його інопланетну армію.',
      isFavorite: true
    },
    {
      id: 3,
      title: 'Людина-павук: Додому шляху нема',
      poster: spidermanPoster,
      rating: 8.2,
      genre: 'Екшн',
      year: '2021',
      description: 'Пітер Паркер звертається до Доктора Стренджа по допомогу, що призводить до мультивсесвітньої кризи.',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Вартові галактики',
      poster: guardiansPoster,
      rating: 8.0,
      genre: 'Фантастика',
      year: '2014',
      description: 'Група міжгалактичних злочинців змушена об\'єднатися задля порятунку всесвіту.',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Локі',
      poster: lokiPoster,
      rating: 8.2,
      genre: 'Серіал',
      year: '2021',
      description: 'Пригоди бога бешкетництва в таємничому Управлінні часовими змінами.',
      isFavorite: false
    },
    {
      id: 6,
      title: 'ВандаВіжн',
      poster: wandavisionPoster,
      rating: 7.9,
      genre: 'Серіал',
      year: '2021',
      description: 'Ванда і Віжн живуть ідеальним приміським життям, але починають підозрювати щось дивне.',
      isFavorite: false
    }
  ]);

  const [filterMode, setFilterMode] = useState('Усі');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const categories = ['Усі', 'Екшн', 'Фантастика', 'Серіал', 'Обране'];
  
  const sidebarCategories = [
    'Аніме', 'Біографія', 'Бойовики', 'Вестерни', 
    'Військові', 'Детективи', 'Документальні', 'Драми', 
    'Комедії', 'Кримінал', 'Мелодрами', 'Трилери', 
    'Фантастика', 'Жахи'
  ];

  const navigation = [
    { name: 'Головна', link: '#home' },
    { name: 'Фільми', link: '#movies' },
    { name: 'Серіали', link: '#series' },
    { name: 'Про нас', link: '#about' }
  ];

  const featuredMovie = {
    title: 'Месники: Війна нескінченності',
    description: 'Найбільше зіткнення у всесвіті Marvel. Месники та їхні союзники повинні пожертвувати всім, щоб перемогти могутнього Таноса, перш ніж його руйнівний наступ знищить половину всесвіту.'
  };

  // Функція-оновлювач для зміни статусу "улюблений" (like/unlike)
  const handleToggleFavorite = (movieId) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === movieId ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  // Фільтрація фільмів згідно обраної категорії
  const filteredMovies = movies.filter(movie => {
    if (filterMode === 'Усі') return true;
    if (filterMode === 'Обране') return movie.isFavorite;
    return movie.genre === filterMode;
  });

  // Розрахунок кількості в обраному для показу в Header
  const favoritesCount = movies.filter(movie => movie.isFavorite).length;

  return (
    <>
      <Header brand="MovieBase" navItems={navigation} favoritesCount={favoritesCount} />
      <div className="layout-wrapper">
        <Sidebar categories={sidebarCategories} />
        <Main 
          movies={filteredMovies} 
          categories={categories} 
          filterMode={filterMode}
          onFilterChange={setFilterMode}
          featuredMovie={featuredMovie}
          onToggleFavorite={handleToggleFavorite}
          onSelectMovie={setSelectedMovie}
        />
      </div>
      <Footer brand="MovieBase" navItems={navigation} />
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
};

export default App;
