import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
import "../styles/header.scss";

export const Header = () => {
  return (
    <nav className="header-style">
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => `space-nav-link-home ${isActive ? 'active-link' : ''}`}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active-link' : ''}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
