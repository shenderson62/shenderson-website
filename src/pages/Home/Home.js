import React from 'react';
import './Home.css'
import Screen from '../../components/Screen/Screen';
import Terminal from '../../components/Terminal/Terminal'

function Home() {
  return (
    <Screen>
      <Terminal promptText="python introduce-self.py">
        Hello! 
        I'm Stephanie Henderson <br /> <br />
        I'm a graduate student at Georgia Tech. 
        I am pursuing a MS in Computer Science 
        with a specialization in Machine Learning.
      </Terminal>
    </Screen>
  );
}

export default Home;
