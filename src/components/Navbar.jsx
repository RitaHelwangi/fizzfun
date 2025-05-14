import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import FizzFunLogo from '../assets/FizzFunSVG.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={FizzFunLogo} alt="FizzFun Logo" className="logo-image" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link">Cart (0)</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
