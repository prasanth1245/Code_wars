import "./BattleEmblems.css";

export function ShieldWatermark({ className = "" }) {
  return (
    <svg className={`emblem-wm emblem-wm--shield ${className}`} viewBox="0 0 400 400" aria-hidden="true">
      <circle cx="200" cy="200" r="190" fill="none" stroke="var(--blue)" strokeWidth="2" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="var(--blue)" strokeWidth="2" />
      <path d="M200,30 L200,370 M30,200 L370,200" stroke="var(--blue)" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="18" fill="var(--blue)" opacity="0.5" />
    </svg>
  );
}

export function ArmorWatermark({ className = "" }) {
  return (
    <svg className={`emblem-wm emblem-wm--armor ${className}`} viewBox="0 0 400 460" aria-hidden="true">
      <polygon
        points="200,20 360,110 360,320 200,440 40,320 40,110"
        fill="none"
        stroke="var(--crimson)"
        strokeWidth="2"
      />
      <polygon
        points="200,70 320,135 320,300 200,385 80,300 80,135"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.2"
      />
      <path d="M200,135 L200,300 M140,190 L260,190 M140,250 L260,250" stroke="var(--gold)" strokeWidth="1" />
      <circle cx="200" cy="215" r="26" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle cx="200" cy="215" r="10" fill="var(--gold)" opacity="0.6" />
    </svg>
  );
}