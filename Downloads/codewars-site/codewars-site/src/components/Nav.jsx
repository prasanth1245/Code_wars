import { useEffect, useState } from "react";
import ClashMark from "./ClashMark.jsx";
import "./Nav.css";

const LINKS = [
  { href: "#missions", label: "Missions" },
  { href: "#flow", label: "Battle Flow" },
  { href: "#about", label: "About" },
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }, /* <--- ADDED NAV LINK */
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          <ClashMark size={40} />
          MARVEL <span className="nav__code">CODE</span> <span className="nav__wars">WARS</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#register" className="nav__cta">
          Register
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#register" onClick={() => setOpen(false)}>
            Register
          </a>
        </div>
      )}
    </header>
  );
}