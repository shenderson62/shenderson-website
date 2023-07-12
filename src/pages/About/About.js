import React from 'react';
import Screen from '../../components/Screen/Screen';
import Desktop from '../../components/Desktop/Desktop';
import './About.css';

function About() {
  return (
    <Desktop className="desktop">
      <Screen className="screen">
        <div className="top-section">
          <p>Hi, I'm Stephanie.</p>
        </div>
        <div className="bottom-section left">
          <p className="bottom-text">
            I'm a graduate student at Georgia Tech, pursuing an MS in computer science with a specialization in machine learning.
            With a deep passion for AI advancements and software development, I strive to stay at the forefront of these rapidly evolving fields.
            <br /> <br />
            My professional experience includes internships at companies such as Microsoft and Slalom Build, where I honed my skills
            as a software engineer. These opportunities have not only shaped my expertise but have also instilled in me a drive to make
            a tangible impact in the industry.
            <br /> <br />
            In addition to internship experience, I have had the privilege of serving as a teaching assistant at Georgia Tech for the
            past two years. This experience has allowed me to collaborate closely with students and professors on challenging topics
            in computer science, fostering a passion for knowledge sharing and academic growth. Together, we navigate through 
            intricate concepts, further fueling my enthusiasm for the field.
          </p>
        </div>
      </Screen>
    </Desktop>
  );
}

export default About;
