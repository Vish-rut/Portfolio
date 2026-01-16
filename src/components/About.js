import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-main">
            <div className="about-image">
              <div className="image-wrapper">
                {/* Profile image served from public/profile.png */}
                <img src="/profile.png" alt="Vishrut Shastri" />
              </div>
            </div>
            <div className="about-text">
              <p>
                I’m a passionate Full Stack Developer based in India, focused on creating meaningful digital experiences and elegant solutions to complex problems. What began as a curiosity about how the web works has grown into a purpose-driven journey of building scalable, user-centric applications.
              </p>

              <p>
                With hands-on experience across both frontend and backend development, I enjoy bringing ideas to life through clean, efficient, and maintainable code. From crafting intuitive user interfaces with React to building robust backend systems using Java and Python, I approach every project with precision, ownership, and a commitment to quality.
              </p>

              <p>
                As a full-stack developer, I value seeing the bigger picture while paying close attention to detail. Whether it’s optimizing database performance, implementing responsive designs, or integrating complex APIs, I take a holistic approach to ensure seamless and reliable user experiences.
              </p>

              <p>
                I’m a continuous learner who stays up to date with modern technologies and industry best practices. Beyond coding, I enjoy exploring new frameworks, contributing to open-source projects, and sharing knowledge within the developer community.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">Hands-on</div>
              <div className="stat-label">experience across multiple projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Practical</div>
              <div className="stat-label">experience with 7+ technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Eager</div>
              <div className="stat-label">to learn and adapt</div>
            </div>
          </div>

          <div className="about-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Based in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
