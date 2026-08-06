import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import "./FAQ.css";

const FAQS = [
  {
    q: "Who can participate in Code Wars?",
    a: "Any undergraduate or postgraduate student with a valid college ID can register, individually or as part of a team of 2–3.",
  },
  {
    q: "Is there a registration fee?",
    a: "Details on registration fees, if applicable, will be shared on the official CYBORGS'26 registration page.",
  },
  {
    q: "What should I bring on the day?",
    a: "Bring your college ID, a laptop with a charger for Missions 1 and 3, and a mind ready for battle.",
  },
  {
    q: "Can I switch teams after registering?",
    a: "Team changes must be finalized before the registration deadline. No changes are permitted once Mission 1 begins.",
  },
  {
    q: "How is the champion decided?",
    a: "Cumulative performance across all three missions determines final rankings, with the Final Showdown deciding the champion.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <FaChevronDown className="faq-item__chevron" aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-item__answer-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="faq-item__answer">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container container--narrow">
        <p className="eyebrow">Intel</p>
        <h2 className="section-title faq__title">Frequently Asked Questions</h2>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
