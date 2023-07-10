import React from 'react';
import './Screen.css';

function Screen({ children }) {
  return (
    <div className="screen-container">
      <div className="browser">
        <div className="title-bar">
        <div className="tabs">
            <div className="tab active">About</div>
            <div className="tab">Experience</div>
            <div className="tab">Resume</div>
            <div className="tab">Contact</div>
          </div>
          <div className="buttons">
            <div className="minimize-button" />
            <div className="close-button" />
          </div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Screen;
