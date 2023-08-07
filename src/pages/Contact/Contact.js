import React from 'react';
import Screen from '../../components/Screen/Screen';
import Desktop from '../../components/Desktop/Desktop';
import './Contact.css';

function Contact() {
  return (
    <Desktop className="desktop">
      <Screen className="screen">
        <div className="top-section">
          <p>Contact Info</p>
        </div>
        <div className="bottom-section left">
          <p className="bottom-text">
            Feel free to reach out to me at <b>shendersongt26@gmail.com</b> <br />
            Connect with me on <a href="https://www.linkedin.com/in/stephanie-henderson-gatech/">LinkedIn</a>
          </p>
        </div>
      </Screen>
    </Desktop>
  );
}

export default Contact;
