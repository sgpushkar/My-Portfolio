'use client';

import { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({
  text,
  className = '',
  intensity = 'medium',
}: GlitchTextProps) {
  const timeoutRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval =
      intensity === 'low' ? 3600 : intensity === 'medium' ? 2400 : 1400;

    const run = () => {
      setActive(true);

      timeoutRef.current = window.setTimeout(() => {
        setActive(false);
        timeoutRef.current = window.setTimeout(run, interval);
      }, 180);
    };

    const starter = window.setTimeout(run, 900);

    return () => {
      window.clearTimeout(starter);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [intensity]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 text-cyan-300 transition-opacity duration-150 ${
          active ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          transform: active ? 'translate(2px, -1px)' : 'translate(0, 0)',
          textShadow: active ? '-2px 0 0 rgba(251, 113, 133, 0.75)' : 'none',
        }}
      >
        {text}
      </span>
    </span>
  );
}
