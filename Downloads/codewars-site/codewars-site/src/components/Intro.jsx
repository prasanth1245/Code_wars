import { useEffect, useRef } from "react";
import introVideo from "../assets/thorvideo.mp4"; 
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
    // (You can change 8000 to match the exact length of your video in milliseconds)
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
      <video
        className="intro-video"
        src={introVideo}
        autoPlay
        muted /* Browsers require 'muted' for videos to auto-play instantly */
        playsInline
        onEnded={handleFinish} /* Automatically moves to Hero page when video finishes! */
      />
      
      <button type="button" className="skip-btn" onClick={handleFinish}>
        SKIP INTRO
      </button>
    </div>
  );
}