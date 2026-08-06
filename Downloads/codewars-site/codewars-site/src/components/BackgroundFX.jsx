import { useEffect, useRef } from "react";
import "./BackgroundFX.css";

// Lightweight canvas starfield + energy sparks that gently drift and
// parallax toward the pointer. Kept in plain canvas (no extra deps) so it
// stays cheap and can run behind every section without competing with the
// R3F hero scene for GPU budget.
export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width, height, dpr;
    let stars = [];
    let sparks = [];
    let raf;
    let mx = 0, my = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const starCount = Math.min(160, Math.floor((width * height) / 9000));
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        tw: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005,
      }));

      const sparkCount = Math.min(28, Math.floor(width / 60));
      sparks = Array.from({ length: sparkCount }, () => makeSpark(width, height));
    }

    function makeSpark(w, h) {
      const fromRight = Math.random() > 0.5;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (fromRight ? -1 : 1) * (Math.random() * 0.25 + 0.08),
        vy: -(Math.random() * 0.2 + 0.05),
        life: Math.random(),
        color: Math.random() > 0.5 ? "229,9,20" : "21,101,192",
        r: Math.random() * 1.6 + 0.6,
      };
    }

    function onMove(e) {
      mx = (e.clientX / width - 0.5) * 2;
      my = (e.clientY / height - 0.5) * 2;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Stars
      for (const s of stars) {
        s.tw += s.speed;
        const alpha = 0.35 + Math.sin(s.tw) * 0.35;
        const px = s.x + mx * 6;
        const py = s.y + my * 6;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`;
        ctx.fill();
      }

      // Energy sparks
      for (const sp of sparks) {
        sp.x += sp.vx + mx * 0.08;
        sp.y += sp.vy;
        sp.life += 0.004;
        if (sp.life > 1 || sp.x < -20 || sp.x > width + 20 || sp.y < -20) {
          Object.assign(sp, makeSpark(width, height));
          sp.y = height + 10;
        }
        const alpha = Math.sin(sp.life * Math.PI) * 0.8;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sp.color},${Math.max(0, alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${sp.color},0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bgfx" aria-hidden="true">
      <div className="bgfx__nebula bgfx__nebula--a" />
      <div className="bgfx__nebula bgfx__nebula--b" />
      <div className="bgfx__beam bgfx__beam--red" />
      <div className="bgfx__beam bgfx__beam--blue" />
      <canvas ref={canvasRef} className="bgfx__canvas" />
      <div className="bgfx__grid" />
      <div className="bgfx__flare" />
      <div className="bgfx__vignette" />
    </div>
  );
}
