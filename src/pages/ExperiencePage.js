import React from 'react';
import Experience from '../components/Experience';
import portfolioData from '../data/portfolioData';
import './Page.css';

const ExperiencePage = () => {
  return (
    <div className="page">
      <div className="page-container">
        <Experience data={portfolioData.experience} />
      </div>
    </div>
  );
};

export default ExperiencePage;