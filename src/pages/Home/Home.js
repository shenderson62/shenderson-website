import React from 'react';
import './Home.css';
import Screen from '../../components/Screen/Screen';
import Terminal from '../../components/Terminal/Terminal';
import Desktop from '../../components/Desktop/Desktop';

function Home() {
  return (
    <Desktop className="desktop">
        <Screen className="screen" />
        <Terminal className="terminal" name="steph" promptText="python introduce-self.py">
          Hello! 
          I'm <b>Stephanie Henderson</b> <br /> <br />
          I'm currently pursuing a MS in 
          Computer Science with a specialization 
          in Machine Learning at Georgia Tech. <br /> <br />
          Click on the tabs to find out more 
          about me and my experience!
        </Terminal>
    </Desktop>
  );
}

export default Home;
