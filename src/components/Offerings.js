import React from 'react';
import './Offerings.css';

const Offerings = () => {
  const offerings = [
    {
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, Java, and Python. Building scalable and maintainable solutions from database to user interface.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      features: ['Frontend & Backend', 'API Development', 'Database Design', 'System Architecture']
    },
    {
      title: 'Responsive UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces that work seamlessly across all devices. Focus on user experience, accessibility, and modern design principles.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      features: ['Mobile-First Design', 'User Interface', 'Prototyping', 'Accessibility']
    },
    {
      title: 'Database Design & Optimization',
      description: 'Designing efficient database schemas and optimizing queries for better performance. Experience with SQL databases and data modeling best practices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      features: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning']
    },
    {
      title: 'Web Application Development',
      description: 'Building dynamic, feature-rich web applications with modern frameworks and tools. From e-commerce platforms to custom business solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      features: ['SPA Development', 'RESTful APIs', 'Authentication', 'Third-party Integration']
    },
    {
      title: 'Frontend Development with React',
      description: 'Specialized in building modern, high-performance React applications with clean code and component-based architecture. Creating reusable and maintainable solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>
      ),
      features: ['Component Architecture', 'State Management', 'Hooks & Context', 'Performance Optimization']
    }
  ];

  return (
    <section id="offerings" className="section offerings">
      <div className="offerings-container">
        <h2 className="section-title">Capabilities</h2>
        <p className="section-subtitle">How I add value</p>
        
        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <div 
              className="offering-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="offering-icon">{offering.icon}</div>
              <h3 className="offering-title">{offering.title}</h3>
              <p className="offering-description">{offering.description}</p>
              <ul className="offering-features">
                {offering.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
