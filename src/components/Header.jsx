import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <a href="#hero" onClick={closeMenu}>StudAI</a>
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#about" onClick={closeMenu}>О нас</a></li>
            <li className="nav-item"><a href="#features" onClick={closeMenu}>Преимущества</a></li>
            <li className="nav-item"><a href="#howitworks" onClick={closeMenu}>Как это работает</a></li>
            <li className="nav-item"><a href="#testimonials" onClick={closeMenu}>Отзывы</a></li>
            <li className="nav-item"><a href="#subscription" onClick={closeMenu}>Подписка</a></li>
            <li className="nav-item"><a href="#contact" onClick={closeMenu}>Контакты</a></li>
          </ul>
        </nav>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
