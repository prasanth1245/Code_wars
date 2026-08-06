import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCompass } from "react-icons/fa6";
import Countdown from "./Countdown.jsx";
import heroBg from "../assets/thor4.jpeg"; /* Update name if needed */
import "./Hero.css";

const TAGLINE = "Battle of Logic. Clash of Code.";

function useTypewriter(text, speed = 45, startDelay = 700) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timeoutId;
    const start = setTimeout(function tick() {
      timeoutId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(timeoutId);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timeoutId);
    };
  }, [text, speed, startDelay]);
  return out;
}

export default function Hero() {
  const typed = useTypewriter(TAGLINE);
  const heroRef = useRef(null);

  return (
    <section className="hero" id="top" ref={heroRef}>
      {/* Background Layer */}
      <div className="hero__bg" style={{ backgroundImage: `url('${heroBg}')` }}></div>
      <div className="hero__overlay"></div>

      <div className="hero__inner container">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__eyebrow eyebrow">CYBORGS&rsquo;26</span>
          <h1 className="hero__title">
           <span>MARVEL</span>
           <span className="hero__title-lightning">CODE</span> 
           <span className="hero__title-accent">WARS</span>
          </h1>
          <p className="hero__tagline" aria-live="polite">
            {typed}
            <span className="hero__caret">|</span>
          </p>
          <p className="hero__dept">Department of Computer Science and Engineering</p>

          <div className="hero__cta">
            <a href="#register" className="btn btn--primary">
              Register Now <FaArrowRight aria-hidden="true" />
            </a>
            <a href="#missions" className="btn btn--ghost">
              <FaCompass aria-hidden="true" /> Explore Rounds
            </a>
          </div>

          <Countdown />
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
        </motion.div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}