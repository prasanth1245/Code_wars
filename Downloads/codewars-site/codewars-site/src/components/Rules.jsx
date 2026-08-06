import { motion } from "framer-motion";
import { ArmorWatermark } from "./BattleEmblems.jsx";
import "./Rules.css";

const RULES = [
  {
    title: "Team Composition",
    body: "Teams of 2–3 members. Cross-department and cross-college teams are welcome to enlist.",
  },
  {
    title: "Reporting Time",
    body: "All squads must report 30 minutes before their assigned mission slot. Late arrivals forfeit their seat.",
  },
  {
    title: "Fair Play",
    body: "Any form of plagiarism, external assistance, or unauthorized collaboration results in immediate disqualification.",
  },
  {
    title: "Judging Protocol",
    body: "Decisions made by the judging panel and event coordinators are final and binding at every mission.",
  },
  {
    title: "Elimination",
    body: "Only top-ranked teams from each mission advance. Scores are cumulative across screening rounds.",
  },
];

export default function Rules() {
  return (
    <section className="rules" id="rules">
      <ArmorWatermark />
      <div className="container">
        <p className="eyebrow">Briefing</p>
        <h2 className="section-title rules__title">Rules of Engagement</h2>

        <div className="rules__grid">
          {RULES.map((r, i) => (
            <motion.div
              className="rule-panel"
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <span className="rule-panel__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="rule-panel__title">{r.title}</h3>
              <p className="rule-panel__body">{r.body}</p>
              <span className="rule-panel__scan" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}