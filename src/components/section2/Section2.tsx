import React from 'react';
import Header2 from './Header/Header2';
import './Section2.css';

function Section2() {
  return (
    <section id="about" className="section-about">
      <Header2
        title="About Me"
        subtitle="Brief introduction about yourself goes here."
      />
      <div className="section-content">
        <p>Brief introduction about yourself goes here.</p>
      </div>
    </section>
  )
}

export default Section2
