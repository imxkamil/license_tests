import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>Zdamy<strong>To</strong></span>
      </div>
      <ul className="nav-links">
        <li><a href="/">TESTY B</a></li>
        <li><a href="/">NAUKA B</a></li>
        <li><a href="/">ZALICZENIE B</a></li>
        <li><a href="/">KSIĄŻKI</a></li>
        <li><a href="/">E-KURS B</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
