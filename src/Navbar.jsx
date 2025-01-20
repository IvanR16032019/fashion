import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './hojas-estilo-estilos/Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger-btn" onClick={toggleMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/" className="navbar-link">
              {t('home')}
            </Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/about" className="navbar-link">
              {t('aboutUs')}
            </Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/testimonials" className="navbar-link">
              {t('testimonials')}
            </Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/contact" className="navbar-link">
              {t('contact')}
            </Link>
          </li>
        </ul>
        <div className="navbar-lang-buttons">
          <button onClick={() => changeLanguage('en')} className="lang-button">
            EN
          </button>
          <button onClick={() => changeLanguage('es')} className="lang-button">
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
