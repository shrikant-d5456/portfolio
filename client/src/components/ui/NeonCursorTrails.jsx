import { useEffect, useRef, useState } from "react";

const DOT_COUNT = 16;

const createDots = () =>
  Array.from({ length: DOT_COUNT }, (_, index) => ({
    id: index,
    x: 0,
    y: 0,
  }));

const NeonCursorTrails = () => {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [dots, setDots] = useState(() => createDots());
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      setEnabled(false);
      return undefined;
    }

    const handleMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      setDots((prev) => {
        const next = [...prev];

        for (let i = 0; i < next.length; i += 1) {
          const lead = i === 0 ? targetRef.current : next[i - 1];
          const ease = i === 0 ? 0.35 : 0.28;

          next[i] = {
            ...next[i],
            x: next[i].x + (lead.x - next[i].x) * ease,
            y: next[i].y + (lead.y - next[i].y) * ease,
          };
        }

        return next;
      });

      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="neon-cursor-layer" aria-hidden="true">
      {dots.map((dot, index) => (
        <span
          key={dot.id}
          className={`neon-cursor-dot${visible ? " visible" : ""}`}
          style={{
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
            "--dot-index": index,
            "--dot-count": DOT_COUNT,
          }}
        />
      ))}
    </div>
  );
};

export default NeonCursorTrails;
