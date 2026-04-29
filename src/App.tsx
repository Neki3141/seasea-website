import React from 'react';

// TypeScript Imports for Components
import Intro from './components/Intro/Intro';
import Header1 from './components/Header1/Header1';
import Header2 from './components/Header2/Header2';
import Header3 from './components/Header3/Header3';
import Header4 from './components/Header4/Header4';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Intro
        title="Intro Section"
        subtitle="Welcome to the site with an introductory overview."
      />
      <Header1
        title="Header 1 Section"
        subtitle="This is the first header section with descriptive content."
      />
      <Header2
        title="Header 2 Section"
        subtitle="This is the second header section with different content."
      />
      <Header3
        title="Header 3 Section"
        subtitle="This is the third header section, fully responsive."
      />
      <Header4
        title="Header 4 Section"
        subtitle="This is the fourth and final header section."
      />
      <Footer />
    </div>
  );
}

export default App;