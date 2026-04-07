import React from 'react';
import './Header.css';

const Header = ({ brand, navItems, favoritesCount }) => {
  const [brandName, brandSuffix] = brand.split(/(?=[A-Z])/);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          {brandName}<span>{brandSuffix}</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </nav>
        <div className="auth-box">
          <div className="favorites-indicator">
            <span className="icon">❤️</span> {favoritesCount}
          </div>
          <div className="divider">|</div>
          <a href="#login">Вхід</a> | <a href="#register">Реєстрація</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
