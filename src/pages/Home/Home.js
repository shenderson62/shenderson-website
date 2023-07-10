import React from 'react';
import './Home.css'
import Screen from '../../components/Screen/Screen';
import Terminal from '../../components/Terminal/Terminal'

function Home() {
  return (
    <Screen>
      {/* <div className="center-text">
        <h1>Hello, I'm Stephanie!</h1>
      </div> */}
      <Terminal>
        <p>Hello!</p>
        <p>I'm Stephanie Henderson</p>
      </Terminal>
    </Screen>
  );
}

export default Home;
