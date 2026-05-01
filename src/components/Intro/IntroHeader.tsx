import React from 'react';
import './Intro.css';

/**
 * Glass‑morphism card that displays the team name and slogan.
 * Separated from the slideshow logic for clarity and re‑use.
 */
export const IntroHeader: React.FC = () => {
  return (
    <div className="intro‑card">
      <h1 className="team‑name">seasea</h1>
      <p className="slogan">hello world</p>
    </div>
  );
};
