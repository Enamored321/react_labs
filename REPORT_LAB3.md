# ЗВІТ З ЛАБОРАТОРНОЇ РОБОТИ №3
## Тема: Робота зі станом (State) та подіями в React

---

### 1. Титульний аркуш

**Дисципліна:** Розробка фронтенд-застосунків  
**Тема:** Лабораторна робота №3  
**Виконав:** [Ваше Прізвище та Ім'я]  
**Група:** [Ваша Група]  

---

### 2. Короткий опис проєкту

*   **Назва ідеї застосунку:** MovieBase (Кіно-портал Marvel).
*   **Мета створення:** Створення інтерактивної галереї фільмів та серіалів всесвіту Marvel з можливістю додавання елементів до списку "Обраного" за допомогою React State. Мета полягає в освоєнні хука `useState`, односпрямованого потоку даних (props) та обробки подій у React.
*   **Загальна функціональність:** Застосунок відображає сітку фільмів, дозволяє користувачеві відмічати фільми як "улюблені" за допомогою кнопки-серця, автоматично підраховує кількість обраних елементів у хедері та візуально виділяє "улюблені" картки спеціальними бейджами та рамками.

---

### 3. Опис компонентів

| Компонент | Призначення |
| :--- | :--- |
| **App** | Контейнерний компонент. Керує глобальним станом (`useState`), містить масив об’єктів фільмів та функції-обробники подій. |
| **Header** | Відображає логотип, навігацію та індикатор кількості обраних фільмів. |
| **Sidebar** | Бокова панель зі списком жанрів/категорій. |
| **Main** | Структурний компонент, що об’єднує баннер (Hero) та список фільмів. |
| **Hero** | Акцентна секція з рекомендованим фільмом. |
| **MovieList** | Контейнер для списку карток фільмів, отримує дані через props. |
| **MovieCard** | Презентаційний компонент окремого фільму. Містить кнопку взаємодії. |
| **CategoryFilter** | Кнопки фільтрації (презентаційний компонент). |
| **Footer** | Нижня частина сторінки з посиланнями та копірайтом. |

**Дерево компонентів:**
`App` (State: movies)
├── `Header` (Props: favoritesCount)
├── `Sidebar` (Props: categories)
└── `Main` (Props: movies, onToggleFavorite)
    ├── `Hero` (Props: movie)
    └── `MovieList` (Props: movies, onToggleFavorite)
        ├── `CategoryFilter`
        └── `MovieCard` (Props: movie, onToggleFavorite)


---

### 4. Код ключових компонентів

#### App.jsx (Управління станом)
```javascript
import React, { useState } from 'react';
// ... імпорти компонентів та зображень

const App = () => {
  // Визначення стану для масиву об’єктів
  const [movies, setMovies] = useState([
    { id: 1, title: 'Залізна людина', rating: 7.9, isFavorite: false, ... },
    { id: 2, title: 'Месники', rating: 8.0, isFavorite: true, ... },
    // 6 початкових елементів
  ]);

  // Функція-обробник для зміни стану (like/unlike)
  const handleToggleFavorite = (movieId) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === movieId ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  // Розрахунок даних на основі стану
  const favoritesCount = movies.filter(movie => movie.isFavorite).length;

  return (
    <>
      <Header favoritesCount={favoritesCount} ... />
      <Main movies={movies} onToggleFavorite={handleToggleFavorite} ... />
      <Footer ... />
    </>
  );
};
```

#### MovieCard.jsx (Презентація та подія)
```javascript
const MovieCard = ({ movie, onToggleFavorite }) => {
  return (
    <article className={`movie-card ${movie.isFavorite ? 'favorite' : ''}`}>
      <div className="poster-wrapper">
        <img src={movie.poster} alt={movie.title} />
        <button 
          className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
        >
          {movie.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h4>
          {movie.title}
          {movie.isFavorite && <span className="fav-badge">Обране</span>}
        </h4>
        <p>{movie.description}</p>
      </div>
    </article>
  );
};
```

---

### 5. Результати (Опис змін в UI)

1.  **Header**: Додано індикатор `❤️ [Число]`, який автоматично інкрементується або декрементується при кліку на серце в будь-якій картці.
2.  **Картки фільмів**: 
    - Додано інтерактивну кнопку перемикання статусу (серце).
    - При стані `isFavorite: true` додається червона рамка (`.favorite`) та текстовий бейдж "Обране".
3.  **Логіка**: Доведено принцип односпрямованого потоку: подія "клік" у `MovieCard` викликає функцію в `App`, яка оновлює стан, що призводить до перерендеру всього дерева з новими пропсами.

---

### 6. Додатки

Файлова структура проєкту:
- `src/App.jsx`
- `src/components/Header.jsx`
- `src/components/Main.jsx`
- `src/components/MovieList.jsx`
- `src/components/MovieCard.jsx`
- `src/components/Sidebar.jsx`
- `src/components/Footer.jsx`
- `src/components/CategoryFilter.jsx`
