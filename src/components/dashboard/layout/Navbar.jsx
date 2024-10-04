import React from 'react';
import '../../../styles/Navbar.css';

import searchIcon from './../../../../public/icon-search--black.svg';


/* const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
          <img src="/imagenes/logo_sri.png" alt="Logo SRI" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="user-info">
          <span>Claudio Pérez</span>
          <img src="/imagenes/cp.png" alt="Usuario" />
        </div>
    </header>
  );
}; */

const Navbar = () => {
  return(
    <header className="header">
      <nav className="nav">
        <a href="/dashboard" className="nav__cta">
          <figure className="nav__cta__figure">
            <img src="/imagenes/logo_sri.png" alt="Logo SRI" />
          </figure>
        </a>
        <div className="nav__search__bar">
          <label htmlFor="search-bar" className="nav__search__bar__label">
            <img src={searchIcon} className="nav__search__bar__icon" alt="Search Icon" />
          </label>
          <input className="nav__search__bar__input" id="search-bar" type="text" placeholder="Buscar" />
        </div>
        <div className="nav__user__info">
          <span className="nav__user__info__text">Claudio Pérez</span>
          <figure className="nav__user__info__figure">
            <img src="/imagenes/cp.png" alt="Usuario" />
          </figure>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
