import React, { useState, useEffect } from 'react';
import './Terminal.css';

function Terminal({ name, children, promptText }) {
  const [typedText, setTypedText] = useState('');
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < promptText.length - 1) {
        setTypedText((prevText) => prevText + promptText[currentIndex]);
        currentIndex++;
        if (currentIndex === (promptText.length - 1)) {
          setShowChildren(true);
        }
        timeout = setTimeout(typeText, 100); // Delay between each character (adjust as needed)
      }
    };

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, [promptText]);

  useEffect(() => {
    setShowChildren(false);
  }, []);

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
        <div className="terminal-path">C:/Users/{name}&gt; {typedText}</div>
        <div className='terminal-text'>{showChildren ? children : null}</div>
      </div>
    </div>
  );
}

export default Terminal;
