import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-bio-header">
              <h3 className="about-bio-title">Bio</h3>
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <img 
                    src="/images/profile.png" 
                    alt="Abhay Singh" 
                    className="about-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="about-image-fallback">
                    <span className="about-initials">AS</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="about-bio-text">
              {data.bio}
            </p>
          </motion.div>
          
          <motion.div
            className="about-education"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="about-education-title">Education</h3>
            <div className="about-education-list">
              {data.education.map((edu, index) => (
                <div key={index} className="about-education-card">
                  <h4 className="about-education-institution">{edu.institution}</h4>
                  <p className="about-education-degree">{edu.degree}</p>
                  <p className="about-education-period">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;