import React from 'react';
import Skills from '../components/Skills';
import portfolioData from '../data/portfolioData';
import '../components/Skills.css';

const SkillsPage = () => {
  return (
    <div className="skills-page-wrapper">
      <Skills data={portfolioData.skills} />
    </div>
  );
};

export default SkillsPage;