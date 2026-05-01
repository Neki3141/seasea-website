import React from 'react';
import Header1 from './Header/Header1';
import './Section1.css';

const Section1 = () => {
  return (
    <section id="intro" className="section-intro">
      <Header1
        title="Intro Section"
        subtitle="Welcome to the site with an introductory overview."
      />
      <div className="section-content">
        <p>A portfolio of my work and experiences.</p>
      </div>
    </section>
  );
};

export default Section1;