import { useEffect, useState } from "react";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import "./background.css";

const images = [bg1, bg2];

const FADE_DURATION = 1000; // ms
const DISPLAY_TIME = 10000; // ms (time each image stays fully visible)

/**
 * Intro component – fullscreen glass‑morphism card with a fading background slideshow.
 * The text is static (team name + slogan) as requested.
 */
export const Background = () => {
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

  function Background(){
    return (
        <div className="intro-container">
        <img
            src={images[index]}
            alt="Background"
            className={`background ${fade ? "fade-out" : "fade-in"}`}
        />
        </div>
    );
    }
};

export default Background
