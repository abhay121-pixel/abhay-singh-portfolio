import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const ExperienceItem = ({ experience, index }) => (
  <motion.div 
    className="experience-item"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="experience-timeline"></div>
    <div className="experience-content">
      <h3 className="experience-role">{experience.role}</h3>
      {experience.company && (
        <p className="experience-company">{experience.company}</p>
      )}
      <p className="experience-period">{experience.period}</p>
      <p className="experience-description">{experience.description}</p>
    </div>
  </motion.div>
);

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="experience-list">
          {data.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;