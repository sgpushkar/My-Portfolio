'use client';

import { useEffect, useRef, useState } from 'react';

export default function FuturisticCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const computeEnabled = () => finePointer.matches && !reducedMotion.matches;

    const updateEnabled = () => setEnabled(computeEnabled());
    updateEnabled();

    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    const glow = glowRef.current;
    const trail = trailRef.current;

    if (!cursor || !glow || !trail) return;

    const ctx = trail.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      trail.width = Math.floor(window.innerWidth * dpr);
      trail.height = Math.floor(window.innerHeight * dpr);
      trail.style.width = `${window.innerWidth}px`;
      trail.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    setCanvasSize();

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const drawTrail = () => {
      // Keep the canvas fully transparent to avoid tinting the UI.
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update cursor position with easing
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      // Draw main cursor
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';

      // Draw glow
      glow.style.left = cursorX - 30 + 'px';
      glow.style.top = cursorY - 30 + 'px';

      // Draw soft bloom on canvas (no full-screen overlay).
      const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, 40);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(cursorX - 40, cursorY - 40, 80, 80);

      requestAnimationFrame(drawTrail);
    };

    drawTrail();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [enabled]);

  useEffect(() => {
    // Only hide the OS cursor when the custom cursor is active.
    document.body.classList.toggle('cursor-none', enabled);
    return () => document.body.classList.remove('cursor-none');
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={trailRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />

      {/* Glow circle */}
      <div
        ref={glowRef}
        className="fixed w-16 h-16 rounded-full pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, transparent 70%)',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)',
          filter: 'blur(1px)',
        }}
      />

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 pointer-events-none z-50"
        style={{
          border: '2px solid #00e5ff',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0, 229, 255, 0.8), inset 0 0 10px rgba(0, 229, 255, 0.4)',
        }}
      />
    </>
  );
}
