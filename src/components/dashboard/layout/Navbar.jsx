import React from 'react';
import '../../../styles/Navbar.css';
const Navbar = () => {
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
};

export default Navbar;
