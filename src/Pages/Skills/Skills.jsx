// Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-description">A comprehensive list of my technical skills and areas of expertise.</p>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux</li>
            <li>Responsive Design, UI/UX</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js, Express.js</li>
            <li>MongoDB, SQL</li>
            <li>API Development</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Cybersecurity</h3>
          <ul>
            <li>Network Security</li>
            <li>Penetration Testing</li>
            <li>Ethical Hacking</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Other Skills</h3>
          <ul>
            <li>Git, Docker</li>
            <li>Cloud Deployment</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
