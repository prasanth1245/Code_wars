import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      
      {/* Wrapper added for perfectly centered layout */}
      <div className="container about__wrapper">
        
        {/* Centered Glass Card */}
        <motion.div
          className="about__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Transmission</p>
          <h2 className="section-title about__title">About Marvel Code Wars</h2>
          <p className="about__text">
            MARVEL CODE WARS is the flagship battleground of <strong>CYBORGS&rsquo;26</strong>, the National
            Level Technical Symposium hosted by the Department of Computer Science and
            Engineering. Coders from across the country step into a three-mission gauntlet built
            to test logic, speed, and nerve under pressure. Every round strips away the noise
            until only the sharpest problem-solvers remain standing in the arena.
          </p>
          <div className="about__stats">
            <div>
              <span className="about__stat-value">3</span>
              <span className="about__stat-label">Missions</span>
            </div>
            <div>
              <span className="about__stat-value">1</span>
              <span className="about__stat-label">Champion Team</span>
            </div>
            <div>
              <span className="about__stat-value">&infin;</span>
              <span className="about__stat-label">Bragging Rights</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}