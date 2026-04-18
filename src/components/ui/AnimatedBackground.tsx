'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  colorIndex: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Color palette matching theme
    const colors = [
      { r: 31, g: 111, b: 235 },   // accent-primary (blue)
      { r: 245, g: 158, b: 11 },   // accent-warm (orange)
    ];

    // Initialize particles
    const particleCount = 80;
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.15,
        colorIndex: Math.floor(Math.random() * colors.length),
      });
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Window resize handler
    const handleResize = () => {
      resizeCanvas();
    };

    // Animation loop
    const animate = () => {
      // Fade trail effect
      ctx.fillStyle = 'rgba(11, 15, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 250;
        const maxDistSq = maxDist * maxDist;

        if (distSq < maxDistSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / maxDist) * 0.4;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        // Add some noise/randomness
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Damping
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        const color = colors[particle.colorIndex];
        const alpha = Math.min(particle.opacity * 0.7, distSq < maxDistSq ? 0.9 : particle.opacity);
        
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections (every 2nd particle to reduce load)
        if (index % 2 === 0) {
          for (let j = index + 1; j < Math.min(index + 15, particles.length); j++) {
            const other = particles[j];
            const dx2 = other.x - particle.x;
            const dy2 = other.y - particle.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (dist2 < 120) {
              const connectionAlpha = (1 - dist2 / 120) * 0.25;
              ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${connectionAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        }
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-[#0f1419] to-[#0d1117]" />

      {/* Interactive particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      />

      {/* Large animated blob 1 - top left */}
      <motion.div
        className="absolute -top-64 -left-64 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-primary/3 blur-3xl"
        animate={{
          x: [0, 50, -40, 20, 0],
          y: [0, -80, 40, -20, 0],
          scale: [1, 1.15, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Large animated blob 2 - bottom right */}
      <motion.div
        className="absolute -bottom-64 -right-64 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-warm/12 to-accent-warm/2 blur-3xl"
        animate={{
          x: [0, -60, 50, -30, 0],
          y: [0, 80, -50, 30, 0],
          scale: [1.05, 0.9, 1.1, 1, 1.05],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{ zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Animated blob 3 - center */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-primary/8 to-accent-primary/1 blur-3xl"
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, 50, -60, 30, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{ zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Animated blob 4 - top right */}
      <motion.div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-warm/10 to-accent-warm/1 blur-3xl"
        animate={{
          x: [0, 70, -50, 30, 0],
          y: [0, -60, 40, -25, 0],
          scale: [1, 0.95, 1.15, 1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        style={{ zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(11, 15, 20, 0) 0%, rgba(11, 15, 20, 0.3) 100%)',
        zIndex: 2,
      }} />
    </div>
  );
}
