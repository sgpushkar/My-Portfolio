// src/components/ui/Cursor.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });
  const animId = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current.cx = e.clientX;
      pos.current.cy = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    function animateRing() {
      pos.current.rx += (pos.current.cx - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.cy - pos.current.ry) * 0.1;
      ring!.style.left = pos.current.rx + "px";
      ring!.style.top = pos.current.ry + "px";
      animId.current = requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverEls = document.querySelectorAll(
      "a, button, .skill-tag, .tech-item, .glass-card"
    );
    const addHover = () => {
      dot?.classList.add("hovered");
      ring?.classList.add("hovered");
    };
    const removeHover = () => {
      dot?.classList.remove("hovered");
      ring?.classList.remove("hovered");
    };

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId.current);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
