// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Thuni Kadai - E - Commerce Website',
      description: 'An online store built with React and MongoDB. Users can browse and purchase items, with all product information stored in a database.',
      demoLink: 'https://myecommerce.com',
      codeLink: 'https://github.com/NithishRay/ecommerce-website'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal website that showcases my skills and projects. It acts as an online resume and portfolio of my work.',
      demoLink: 'https://myportfolio.com',
      codeLink: 'https://github.com/NithishRay/portfolio-website'
    },
    {
      title: 'DoS Attack Simulator',
      description: 'Simulates a Denial of Service (DoS) attack to understand how these attacks work and how to prevent them.',
      demoLink: '#',
      codeLink: 'https://github.com/NithishRay/dos-attack-simulator'
    },
    {
      title: 'Firewall with IDS',
      description: 'A basic firewall with Intrusion Detection System (IDS) to prevent unauthorized access and secure network traffic.',
      demoLink: '#',
      codeLink: 'https://github.com/NithishRay/Firewall-implementation-with-Intrusion-Detection'
    },
    {
      title: 'Port Scanner',
      description: 'A tool to check which ports on a computer are open and accessible, identifying potential security risks.',
      demoLink: '#',
      codeLink: 'https://github.com/NithishRay/Firewall-implementation-with-Intrusion-Detection'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h4 className="section-title">PROJECTS</h4>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">View Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-outline">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
