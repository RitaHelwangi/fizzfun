import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} FizzFun. All rights reserved.</span>
      <NavLink to="/login" className="footer-admin-link">
        Admin
      </NavLink>
    </div>
  </footer>
);

export default Footer;