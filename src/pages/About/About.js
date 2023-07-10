import React from 'react';
import Screen from '../../components/Screen/Screen';
import Desktop from '../../components/Desktop/Desktop';

function About() {
  return (
    <Desktop className="desktop">
        <Screen className="screen">
          <h1>About</h1>
        </Screen>
    </Desktop>
  );
}

export default About;
