// Hero.js
import React from 'react';
import './Hero.css';
import myImage from '../../Assets/Nithish.jpg'; // Update the path to your image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={myImage} alt="Nithish Kumar Srinivasan" />
      </div>
      <div className="hero-content fade-in">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I’m Nithish Kumar Srinivasan, a MERN Stack Developer and Cybersecurity Enthusiast. 
          I enjoy building web applications and learning new technologies to enhance my skills. 
          My goal is to create secure and efficient software that improves user experience.
        </p>
        <a href="projects" className="button zoom-hover">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
