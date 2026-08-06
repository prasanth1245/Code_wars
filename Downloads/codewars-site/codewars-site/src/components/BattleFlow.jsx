import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaShieldHalved,
  FaRankingStar,
  FaBolt,
  FaFlagCheckered,
  FaCrown,
} from "react-icons/fa6";
import "./BattleFlow.css";

const NODES = [
  { icon: FaUserPlus, label: "Registration" },
  { icon: FaShieldHalved, label: "Mission 1" },
  { icon: FaRankingStar, label: "Top Teams" },
  { icon: FaBolt, label: "Battle Arena" },
  { icon: FaFlagCheckered, label: "Final Showdown" },
  { icon: FaCrown, label: "Champion" },
];

export default function BattleFlow() {
  return (
    <section className="flow" id="flow">
      <div className="container">
        <p className="eyebrow">Path To Glory</p>
        <h2 className="section-title flow__title">Battle Flow</h2>

        <div className="flow__line">
          {NODES.map((n, i) => (
            <motion.div
              className="flow__node"
              key={n.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <motion.div
                className="flow__icon"
                initial={{ boxShadow: "0 0 0px rgba(255,215,0,0)" }}
                whileInView={{ boxShadow: "0 0 22px rgba(255,215,0,0.55)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.25 }}
              >
                <n.icon aria-hidden="true" />
              </motion.div>
              <span className="flow__label">{n.label}</span>
              {i < NODES.length - 1 && <span className="flow__connector" aria-hidden="true" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
