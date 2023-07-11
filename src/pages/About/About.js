import React from 'react';
import Screen from '../../components/Screen/Screen';
import Desktop from '../../components/Desktop/Desktop';
import './About.css';

function About() {
  return (
    <Desktop className="desktop">
      <Screen className="screen">
        <div className="top-section">
          {/* Content for the top section */}
        </div>
        <div className="bottom-sections">
          <div className="bottom-section left">
            {/* Content for the first bottom section */}
          </div>
          <div className="bottom-section right">
            {/* Content for the second bottom section */}
          </div>
        </div>
      </Screen>
    </Desktop>
  );
}

export default About;
