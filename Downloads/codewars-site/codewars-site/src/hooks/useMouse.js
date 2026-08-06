import { useEffect, useRef } from "react";

// Tracks normalized mouse position (-1..1) and writes it to CSS custom
// properties on <html> so any element can react via CSS, plus exposes a ref
// for components (e.g. the R3F scene) that need raw values per frame.
export default function useMouse() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current.x = x;
      mouse.current.y = y;
      document.documentElement.style.setProperty("--mx", x.toFixed(4));
      document.documentElement.style.setProperty("--my", y.toFixed(4));
    }
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return mouse;
}
