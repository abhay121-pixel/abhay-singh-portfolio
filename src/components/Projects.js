import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="project-content">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-technologies">{project.technologies}</p>
      <p className="project-description">{project.description}</p>
      {project.github && (
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-github-link"
        >
          View on GitHub
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = ({ data }) => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;