import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"
import "../styles/header.scss"


export const Header = () => {
  return (
    <nav className="header">
        <img src={Logo} alt='logo'></img>
        <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">A propos</Link></li>
      </ul>
    </nav>
  );
}