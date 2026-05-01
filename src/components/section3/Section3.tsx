import React from 'react';
import Header3 from './Header/Header3';
import './Section3.css';

function Section3() {
  const experiences = [
    { title: 'Role 1', company: 'Company A', period: '2024 - Present', description: 'Description of role.' },
    { title: 'Role 2', company: 'Company B', period: '2022 - 2024', description: 'Description of role.' },
  ]

  return (
    <section id="experiences" className="section-experiences">
      <Header3
        title="Experiences"
        subtitle="My professional journey and roles."
      />
      <div className="section-content">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <h3>{exp.title}</h3>
            <span className="company">{exp.company}</span>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section3
