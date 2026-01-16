import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'C/C++',
      level: 85,
      category: 'Programming Languages',
      icon: '💻'
    },
    {
      name: 'Java',
      level: 80,
      category: 'Programming Languages',
      icon: '☕'
    },
    {
      name: 'Python',
      level: 85,
      category: 'Programming Languages',
      icon: '🐍'
    },
    {
      name: 'HTML',
      level: 95,
      category: 'Frontend',
      icon: '📄'
    },
    {
      name: 'CSS',
      level: 90,
      category: 'Frontend',
      icon: '🎨'
    },
    {
      name: 'React',
      level: 90,
      category: 'Frontend',
      icon: '⚛️'
    },
    {
      name: 'SQL',
      level: 85,
      category: 'Database',
      icon: '🗄️'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with to build amazing products</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              className="skill-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-category">{skill.category}</div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Also Experienced With</h3>
          <div className="tags">
            <span className="tag">JavaScript</span>
            <span className="tag">Node.js</span>
            <span className="tag">Git & GitHub</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Responsive Design</span>
            <span className="tag">MySQL</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Data Structures</span>
            <span className="tag">Algorithms</span>
            <span className="tag">OOP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
