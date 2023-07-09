import React from 'react';
import './Screen.css';
import lighthouseBackground from '../../assets/images/lighthouse-background.png';

function Screen() {
  return (
    <div className="screen-container">
        <img className="image-overlay"src={lighthouseBackground} alt="lighthouse background"/>
    </div>
  );
}

export default Screen;