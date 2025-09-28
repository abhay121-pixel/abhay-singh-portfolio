import React from 'react';
import Projects from '../components/Projects';
import portfolioData from '../data/portfolioData';
import './Page.css';

const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="page-container">
        <Projects data={portfolioData.projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;