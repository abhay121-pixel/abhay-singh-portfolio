import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const SkillCategory = ({ title, skills, icon }) => (
  <div className="skills-category">
    <h3 className="skills-category-title">
      {icon && <span className="skills-category-icon">{icon}</span>}
      {title}
    </h3>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="skill-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills = ({ data }) => {
  const skillCategories = [
    { 
      title: "Languages", 
      skills: data.languages,
      icon: "💻"
    },
    { 
      title: "Frameworks", 
      skills: data.frameworks,
      icon: "⚙️"
    },
    { 
      title: "Frontend", 
      skills: data.frontend,
      icon: "🎨"
    },
    { 
      title: "Backend", 
      skills: data.backend,
      icon: "🔧"
    },
    { 
      title: "Databases", 
      skills: data.databases,
      icon: "🗄️"
    },
    { 
      title: "Tools", 
      skills: data.tools,
      icon: "🛠️"
    },
    { 
      title: "Other", 
      skills: data.other,
      icon: "🌟"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are the technologies and tools I've worked with professionally
        </motion.p>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCategory 
                title={category.title} 
                skills={category.skills} 
                icon={category.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;