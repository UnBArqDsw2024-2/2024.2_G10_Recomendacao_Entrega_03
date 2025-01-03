import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <input type="text" placeholder="Pesquisar" className="navbar-search" />
      <div className="profile-icon">P</div>
    </nav>
  );
};

export default Navbar;