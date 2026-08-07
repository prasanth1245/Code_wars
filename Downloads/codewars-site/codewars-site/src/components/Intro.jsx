import { useEffect, useRef } from "react";
import "./Intro.css";

// Changed back to 'onFinish' so your App.jsx actually hears the signal!
export default function Intro({ onFinish }) {
  const finished = useRef(false);

  function handleFinish() {
    if (finished.current) return;
    finished.current = true;
    document.body.classList.remove("intro-lock");
    if (onFinish) onFinish(); 
  }

  useEffect(() => {
    // Lock the background scrolling while the intro plays
    document.body.classList.add("intro-lock");

    // Safety fallback: If the video fails to load or the browser blocks 
    // the 'onEnded' event, this forces the site to open after 8 seconds.
    const timer = setTimeout(() => {
      handleFinish();
    }, 8000); 

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("intro-lock");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="intro-container">
      {/* Top Banner Image (Mobile Only) */}
      <img 
        src="/intro-top.png.jpeg" 
        alt="Top Banner" 
        className="intro-banner intro-banner--top" 
      />

      <video
        className="intro-video"
        src="/thorvideo.mp4"
        autoPlay
        muted /* Browsers require 'muted' for videos to auto-play instantly */
        playsInline
        onEnded={handleFinish} /* Automatically moves to Hero page when video finishes! */
      />

      {/* Bottom Banner Image (Mobile Only) */}
      <img 
        src="/intro-bottom.png.jpeg" 
        alt="Bottom Banner" 
        className="intro-banner intro-banner--bottom" 
      />

      <button type="button" className="skip-btn" onClick={handleFinish}>
        SKIP INTRO
      </button>
    </div>
  );
}