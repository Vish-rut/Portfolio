import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'React E-Commerce Application',
      description: 'A modern, fully responsive e-commerce platform built with React featuring shopping cart functionality, product filtering, search capabilities, and a seamless checkout experience. Implemented state management with React Context API and integrated with a RESTful backend.',
      category: 'frontend',
      technologies: ['React', 'CSS', 'REST API', 'Context API'],
      features: [
        'Dynamic shopping cart with real-time updates',
        'Advanced product filtering and search',
        'Responsive design for all devices',
        'User authentication and authorization',
        'Payment gateway integration'
      ],
      github: 'https://github.com/Vish-rut',
      outcomes: 'Improved user engagement by 40% with intuitive UI/UX design'
    },
    {
      id: 2,
      title: 'Full-Stack Inventory Management System',
      description: 'Comprehensive inventory management solution with Java Spring Boot backend, SQL database, and React frontend. Features real-time inventory tracking, automated alerts for low stock, detailed analytics, and multi-user role management.',
      category: 'fullstack',
      technologies: ['Java', 'Python', 'React', 'SQL', 'REST API'],
      features: [
        'Real-time inventory tracking and updates',
        'Automated low-stock alerts',
        'Advanced analytics and reporting',
        'Multi-user role-based access control',
        'Export functionality (CSV, PDF)'
      ],
      github: 'https://github.com/Vish-rut',
      outcomes: 'Reduced inventory discrepancies by 60% and improved efficiency'
    },
    {
      id: 3,
      title: 'Responsive Portfolio Dashboard',
      description: 'A beautiful, data-driven portfolio dashboard built with React featuring interactive data visualizations, real-time updates, and a modern, clean design. Showcases various projects with detailed analytics and performance metrics.',
      category: 'frontend',
      technologies: ['React', 'HTML', 'CSS', 'Chart.js'],
      features: [
        'Interactive data visualization',
        'Real-time performance metrics',
        'Fully responsive grid layout',
        'Dark mode support',
        'Smooth animations and transitions'
      ],
      github: 'https://github.com/Vish-rut',
      outcomes: 'Enhanced user experience with intuitive data presentation'
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'RESTful API built with Python Flask and PostgreSQL for task management. Features include user authentication with JWT, CRUD operations, task categorization, priority levels, and deadline tracking. Fully documented with Swagger.',
      category: 'backend',
      technologies: ['Python', 'SQL', 'REST API', 'JWT'],
      features: [
        'JWT-based authentication',
        'Complete CRUD operations',
        'Task categorization and priorities',
        'Deadline tracking and notifications',
        'API documentation with Swagger'
      ],
      github: 'https://github.com/Vish-rut',
      outcomes: 'Scalable API serving 1000+ requests per minute'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Featured projects and case studies</p>
        
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card" 
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                    className="project-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-outcomes">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>{project.outcomes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a 
            href="https://github.com/Vish-rut" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
