import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-block">
        <h3 className="sidebar-title">Категорії</h3>
        <ul className="sidebar-list">
          <li><a href="#">Аніме</a></li>
          <li><a href="#">Біографія</a></li>
          <li><a href="#">Бойовики</a></li>
          <li><a href="#">Вестерни</a></li>
          <li><a href="#">Військові</a></li>
          <li><a href="#">Детективи</a></li>
          <li><a href="#">Документальні</a></li>
          <li><a href="#">Драми</a></li>
          <li><a href="#">Комедії</a></li>
          <li><a href="#">Кримінал</a></li>
          <li><a href="#">Мелодрами</a></li>
          <li><a href="#">Трилери</a></li>
          <li><a href="#">Фантастика</a></li>
          <li><a href="#">Жахи</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
