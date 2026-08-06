import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">MARVEL CODE WARS</span>
          <span className="footer__sub">CYBORGS&rsquo;26 &middot; Dept. of Computer Science &amp; Engineering</span>
        </div>
      </div>
      <p className="footer__copy">&copy; 2026 CYBORGS&rsquo;26. All systems armed.</p>
    </footer>
  );
}
