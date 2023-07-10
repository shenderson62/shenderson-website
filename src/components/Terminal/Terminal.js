import React from 'react';
import './Terminal.css';

function Terminal({ children }) {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-title">Powershell</div>
        <div className="terminal-buttons">
          <button className="terminal-button minimize" />
          <button className="terminal-button close" />
        </div>
      </div>
      <div className="terminal-content">
        <div className="terminal-path">C:/Users/steph&gt;</div>
        <div className="terminal-text">{children}</div>
      </div>
    </div>
  );
}

export default Terminal;
