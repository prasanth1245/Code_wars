import { useEffect, useState } from "react";
import "./Countdown.css";

const TARGET = new Date("2026-08-22T09:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="countdown" role="timer" aria-label="Countdown to Marvel Code Wars">
      {units.map((u, i) => (
        <div className="countdown__unit" key={u.label}>
          <div className="countdown__value" key={u.value}>
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="countdown__label">{u.label}</div>
          {i < units.length - 1 && <span className="countdown__sep">:</span>}
        </div>
      ))}
    </div>
  );
}
