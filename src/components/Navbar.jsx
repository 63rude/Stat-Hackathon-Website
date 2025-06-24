// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">PBC Tool</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
