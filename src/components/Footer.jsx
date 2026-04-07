import React from 'react';
import './Footer.css';

const Footer = ({ brand, navItems }) => {
  const [brandName, brandSuffix] = brand.split(/(?=[A-Z])/);

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section brand-section">
          <h2 className="logo">{brandName}<span>{brandSuffix}</span></h2>
          <p>Ваше улюблене місце для перегляду фільмів та серіалів з оновленнями у реальному часі та великою галереєю.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Швидкі Посилання</h4>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Правова інформація</h4>
            <ul>
              <li><a href="#terms">Умови використання</a></li>
              <li><a href="#privacy">Політика конфіденційності</a></li>
              <li><a href="#cookies">Політика використання файлів cookie</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {brand}. Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
