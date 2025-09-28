import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = ({ data }) => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-image-placeholder">
            <img 
              src="/images/profile.png" 
              alt="Abhay Singh" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-image-fallback">
              <span className="hero-initials">AS</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="hero-title">
            {data.name}
          </h1>
          
          <h2 className="hero-subtitle">
            {data.title}
          </h2>
          
          <p className="hero-tagline">
            {data.tagline}
          </p>
          
          <button className="hero-button" onClick={handleViewWork}>
            View My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;