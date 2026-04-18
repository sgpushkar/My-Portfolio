'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update main cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }

      // Animate follower with delay
      const animate = () => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        if (followerRef.current) {
          followerRef.current.style.left = `${followerX}px`;
          followerRef.current.style.top = `${followerY}px`;
        }

        requestAnimationFrame(animate);
      };

      animate();
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (followerRef.current) followerRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-accent-warm rounded-full pointer-events-none z-50 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      />

      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-accent-warm/40 rounded-full pointer-events-none z-50 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      />
    </>
  );
}
