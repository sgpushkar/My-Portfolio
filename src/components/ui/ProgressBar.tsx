// src/components/ui/ProgressBar.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const pct =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;
      bar.style.width = pct + "%";
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={barRef} className="progress-bar" />;
}
