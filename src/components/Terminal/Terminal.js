import React from 'react';
import './Terminal.css';

// promptText is the command typed into the terminal
// children is the output of the command
function Terminal({ children, promptText }) {
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
        <div className="terminal-path">C:/Users/steph&gt; {promptText}</div>
        <div className="terminal-text">{children}</div>
      </div>
    </div>
  );
}

export default Terminal;
