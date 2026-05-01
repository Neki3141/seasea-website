import { useEffect, useState } from 'react';
import { IntroHeader } from './IntroHeader';
import './Intro.css';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';

// Array of background images – replace with your own asset paths
const images = [
  bg1,
  bg2,
  bg3,
];

const FADE_DURATION = 1000; // ms
const DISPLAY_TIME = 10000; // ms (time each image stays fully visible)

/**
 * Intro component – fullscreen glass‑morphism card with a fading background slideshow.
 * The text is static (team name + slogan) as requested.
 */     
export const Intro = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Cycle background images
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // start fade‑out
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
        setFade(false); // fade‑in new image
      }, FADE_DURATION);
    }, DISPLAY_TIME);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="intro‑container">
      {/* background image layer */}
      <div
        className={`bg‑image ${fade ? 'fade‑out' : 'fade‑in'}`}
        style={{ backgroundImage: `url(${images[index]})` }}
        aria-hidden="true"
      />
      {/* glass‑morphism card */}
      <IntroHeader />
    </section>
  );
};

export default Intro;