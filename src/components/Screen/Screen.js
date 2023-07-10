import React from 'react';
import './Screen.css';

// Reusable screen component
// Contains navigation bar and background styling

function Screen({ children }) {
  return (
    <div className="screen-container">
      <div className="navbar">
        <a href="/about">About</a>
        <a href="/experience">Experience</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </div>
      {children}
    </div>
  );
}

export default Screen;