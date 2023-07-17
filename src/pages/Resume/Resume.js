import React from 'react';
import Screen from '../../components/Screen/Screen';
import Desktop from '../../components/Desktop/Desktop';
import resume from './stephanie-henderson-2023-resume.pdf';
import './Resume.css';

function Resume() {
  return (
    <Desktop className="desktop">
      <Screen className="screen">
        <iframe
          src={resume}
          title="Embedded PDF"
          className="pdf-iframe"
        />
      </Screen>
    </Desktop>
  );
}

export default Resume;
