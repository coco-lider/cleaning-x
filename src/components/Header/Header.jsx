import React from "react";
import "./Header.css";
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="" /></div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <span className="cart">Cart (0)</span>
        <button className="quote-btn">Get a free quote</button>
      </div>
    </header>
  );
}

export default Header;