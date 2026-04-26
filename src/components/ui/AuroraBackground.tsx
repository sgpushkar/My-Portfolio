'use client';

import React, { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const WAVE_COUNT = 5; // Reduced for performance
    const BASE_AMPLITUDE = 55;
    const LAYER_AMPLITUDE_GROWTH = 14;
    const BASE_FREQUENCY = 0.007;
    const SECONDARY_FREQUENCY = 0.022;

    const COLORS = [
      [255, 255, 255, 0.08],
      [230, 230, 230, 0.12],
      [200, 200, 200, 0.14],
      [255, 255, 255, 0.10],
      [220, 220, 220, 0.12],
    ];

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
    }

    function computeWaveY(
      x: number,
      layer: number,
      amplitude: number,
      freq1: number,
      freq2: number,
      speed1: number,
      speed2: number,
      verticalBase: number,
      t: number
    ) {
      const wave1 = Math.sin(x * freq1 + t * speed1 + layer * 0.7);
      const wave2 = Math.cos(x * freq2 + t * speed2 + layer * 1.1);
      const wave3 = Math.sin(x * (freq2 * 2.3) + t * (speed2 * 0.7) + layer * 0.4) * 0.4;
      const combined = wave1 * 0.8 + wave2 * 0.45 + wave3 * 0.15;
      return verticalBase + combined * amplitude;
    }

    function drawFloatingParticles() {
      const particleCount = 10; // Reduced for performance
      ctx!.save();
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 137.5;
        const x = (Math.sin(time * 0.7 + seed) * 0.5 + 0.5) * width;
        const y = (Math.cos(time * 0.5 + seed * 2.3) * 0.5 + 0.5) * height;
        const size = 0.8 + Math.sin(time * 2 + i) * 0.4;
        const alpha = 0.08 + Math.sin(time * 1.9 + i * 2) * 0.05;
        ctx!.beginPath();
        ctx!.arc(x, y, size, 0, Math.PI * 2);
        const glow = ctx!.createRadialGradient(x, y, 0, x, y, size * 2.5);
        glow.addColorStop(0, `rgba(210, 225, 255, ${alpha})`);
        glow.addColorStop(0.6, `rgba(180, 200, 240, ${alpha * 0.4})`);
        glow.addColorStop(1, 'rgba(100, 130, 200, 0)');
        ctx!.fillStyle = glow;
        ctx!.fill();
      }
      ctx!.restore();
    }

    function drawWaves() {
      ctx!.clearRect(0, 0, width, height);

      for (let layer = 0; layer < WAVE_COUNT; layer++) {
        const colorIndex = layer % COLORS.length;
        const [r, g, b, baseAlpha] = COLORS[colorIndex];
        const ampVariation = Math.sin(time * 0.8 + layer * 1.2) * 4;
        const amplitude = BASE_AMPLITUDE + layer * LAYER_AMPLITUDE_GROWTH + ampVariation;
        const primaryFreq = BASE_FREQUENCY + layer * 0.0008;
        const secondaryFreq = SECONDARY_FREQUENCY + layer * 0.0015;
        const primarySpeed = 0.9 + layer * 0.15;
        const secondarySpeed = 1.3 + layer * 0.2;
        const verticalOffset = height * 0.5 + Math.sin(time * 0.4 + layer) * 8;
        const lineWidth = 1.2 + (layer * 0.3);
        const alphaPulse = 0.85 + Math.sin(time * 1.3 + layer) * 0.15;
        const finalAlpha = Math.min(baseAlpha * alphaPulse, 0.35);

        ctx!.beginPath();
        const step = Math.max(5, Math.floor(width / 200)); // Increased step for performance
        let firstY = computeWaveY(0, layer, amplitude, primaryFreq, secondaryFreq, 
                                  primarySpeed, secondarySpeed, verticalOffset, time);
        ctx!.moveTo(0, firstY);

        for (let x = step; x < width; x += step) {
          const y = computeWaveY(x, layer, amplitude, primaryFreq, secondaryFreq,
                                 primarySpeed, secondarySpeed, verticalOffset, time);
          ctx!.lineTo(x, y);
        }

        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
        ctx!.lineWidth = lineWidth;
        ctx!.lineCap = 'round';
        ctx!.lineJoin = 'round';
        ctx!.shadowColor = `rgba(${r}, ${g}, ${b}, 0.25)`;
        ctx!.shadowBlur = 6 + layer * 1.5;
        ctx!.stroke();
        ctx!.shadowColor = 'transparent';
        ctx!.shadowBlur = 0;
      }
      drawFloatingParticles();
    }

    function animate() {
      time += 0.018;
      drawWaves();
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="aurora-bg"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
