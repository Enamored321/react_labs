import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Movie<span>Base</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Головна</a></li>
            <li><a href="#movies">Фільми</a></li>
            <li><a href="#series">Серіали</a></li>
            <li><a href="#about">Про нас</a></li>
          </ul>
        </nav>
        <div className="auth-box">
          <a href="#login">Вхід</a> | <a href="#register">Реєстрація</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
