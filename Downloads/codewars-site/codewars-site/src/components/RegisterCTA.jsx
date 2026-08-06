import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import "./RegisterCTA.css";

export default function RegisterCTA() {
  return (
    <section className="register" id="register">
      <div className="container">
        <motion.div
          className="register__panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="register__ring" aria-hidden="true" />
          <p className="eyebrow">Final Call</p>
          <h2 className="section-title register__title">Enlist Your Squad</h2>
          <p className="register__text">
            Seats in the arena are limited. Assemble your team and step into the CODE WARS
            gauntlet before the portal closes.
          </p>
          <a href="#" className="btn btn--primary register__btn">
            Register Now <FaArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
