'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  dark = false,
  hover = true,
}: GlassCardProps) {
  const baseClasses = `
    rounded-2xl border transition-all duration-300
    ${
      dark
        ? 'bg-black/30 border-cyan-500/20 hover:border-cyan-400/50'
        : 'bg-white/5 border-cyan-400/30 hover:border-cyan-300/60'
    }
    backdrop-blur-md
    ${hover ? 'hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]' : ''}
    ${className}
  `;

  return <div className={baseClasses}>{children}</div>;
}
