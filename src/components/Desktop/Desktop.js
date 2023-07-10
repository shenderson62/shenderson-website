import React from 'react';
import './Desktop.css';

function Desktop({children}) {
  return (
    <div className="screen-container">
        {children}
    </div>
  );
}

export default Desktop;
