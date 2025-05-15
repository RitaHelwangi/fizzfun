import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import FizzFunLogo from '../assets/FizzFunSVG.svg';
import useCartStore from '../data/cartStore';
import CartIcon from '../assets/Cart.svg'; 

const Navbar = () => {
	const { cart } = useCartStore();
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);	
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
          <NavLink to="/cart" className="nav-link cart-link">
		  <img src={CartIcon} alt="Cart" className="cart-icon" />
		  <span className="cart-count">{totalItems}</span>
		  </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;