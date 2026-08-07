import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaListCheck,
  FaMasksTheater,
  FaHeartPulse,
  FaBolt,
  FaChessKnight,
  FaSitemap,
  FaLaptopCode,
  FaPuzzlePiece,
  FaClock,
  FaTrophy,
  FaHourglassHalf,
  FaUsers,
  FaFileLines,
} from "react-icons/fa6";
import "./Missions.css";

const MISSIONS = [
  {
    id: "01",
    theme: "blue",
    name: "Preliminary Screening",
    tag: "Mission 01 · MCQ Round",
    duration: "10–15 Minutes",
    objective:
      "A paper-based MCQ ambush that tests raw technical instinct alongside Marvel knowledge — the first filter separating the sharp from the slow.",
    details: [
      { icon: FaFileLines, label: "Printed question paper, tick/circle answers — zero devices" },
      { icon: FaCode, label: "60% Technical: programming basics, CS fundamentals, logic, problem solving" },
      { icon: FaMasksTheater, label: "40% Marvel: MCU, characters, powers, storylines" },
      { icon: FaTrophy, label: "Ranked by score — The Teams will be qualfied to next round." },
    ],
    objectives: [
      { icon: FaCode, label: "Programming" },
      { icon: FaBrain, label: "Logical Reasoning" },
      { icon: FaListCheck, label: "Technical MCQ" },
      { icon: FaMasksTheater, label: "Superhero Universe Quiz" },
    ],
  },
  {
    id: "02",
    theme: "gold",
    name: "Battle Arena",
    tag: "Mission 02 · 1v1 Showdown",
    duration: "15–20 Minutes",
    objective:
      "The qualified teams split into head-to-head duels. Every team starts with 100 Lifeline Points — choose your battles wisely, or watch them drain to zero.",
    details: [
      { icon: FaUsers, label: " Qualified teams from round 1 will face in 1v1 battle " },
      { icon: FaHeartPulse, label: "100 Lifeline Points per team at the start" },
      { icon: FaBolt, label: "Easy = 10 pts · Medium = 20 pts · Hard = 30 pts" },
      { icon: FaSitemap, label: "Correct answer steals points from the challenger; a miss costs the chooser" },
      { icon: FaChessKnight, label: "0 or below Lifeline Points = instant elimination" },
      { icon: FaTrophy, label: "First to 100 points per duel qualifies — 3 finalists advance" },
    ],
    objectives: [
      { icon: FaHeartPulse, label: "Lifeline System" },
      { icon: FaBolt, label: "Battle Points" },
      { icon: FaChessKnight, label: "Strategic Gameplay" },
      { icon: FaSitemap, label: "Elimination Flow" },
    ],
  },
  {
    id: "03",
    theme: "crimson",
    name: "Final Showdown",
    tag: "Mission 03 · Coding Finale",
    duration: "15–20 Minutes",
    objective:
      "The finalist teams face one identical coding problem. Accuracy and speed decide the champion of Code Wars. ",
    details: [
      { icon: FaFileLines, label: "Same coding problem provided to all finalists" },
      { icon: FaLaptopCode, label: "Participate solve the problem on the provided system." },
      { icon: FaClock, label: "Teams sumbit their solution upon completion; fastest correct submission wins " },
      { icon: FaPuzzlePiece, label: "Tie-breaker: If scores are tied, Round 1 & 2 points will be considered." },
    ],
    objectives: [
      { icon: FaLaptopCode, label: "Coding Challenge" },
      { icon: FaPuzzlePiece, label: "Problem Solving" },
      { icon: FaHourglassHalf, label: "Time-based Competition" },
      { icon: FaTrophy, label: "Champion Selection" },
    ],
  },
];

function MissionCard({ mission, index }) {
  return (
    <motion.article
      className={`terminal terminal--${mission.theme}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="terminal__bracket terminal__bracket--tl" />
      <div className="terminal__bracket terminal__bracket--tr" />
      <div className="terminal__bracket terminal__bracket--bl" />
      <div className="terminal__bracket terminal__bracket--br" />

      <div className="terminal__head">
        <span className="terminal__tag">{mission.tag}</span>
        <span className="terminal__dot" />
      </div>
      <h3 className="terminal__name">{mission.name}</h3>
      <span className="terminal__duration">
        <FaClock aria-hidden="true" /> {mission.duration}
      </span>

      <p className="terminal__objective">{mission.objective}</p>

      <ul className="terminal__details">
        {mission.details.map((d) => (
          <li key={d.label}>
            <d.icon aria-hidden="true" />
            <span>{d.label}</span>
          </li>
        ))}
      </ul>

      <ul className="terminal__objectives">
        {mission.objectives.map((o) => (
          <li key={o.label}>
            <o.icon aria-hidden="true" />
            <span>{o.label}</span>
          </li>
        ))}
      </ul>

      <div className="terminal__scanline" aria-hidden="true" />
    </motion.article>
  );
}

export default function Missions() {
  return (
    <section className="missions" id="missions">
      
      {/* High-Res Bifrost Background */}
      <div className="bg-bifrost" aria-hidden="true">
        <div className="bifrost-stream"></div>
      </div>

      <div className="container relative-container">
        <p className="eyebrow">Deployment Sequence</p>
        <h2 className="section-title missions__title">Mission Terminals</h2>
        <p className="missions__sub">
          Three transmissions. Three trials. Only the sharpest logic survives to the final round —
          fully offline, no laptops or phones required at any stage.
        </p>

        <div className="missions__grid">
          {MISSIONS.map((m, i) => (
            <MissionCard mission={m} index={i} key={m.id} />
          ))}
        </div>
      </div>
    </section>
  );
}