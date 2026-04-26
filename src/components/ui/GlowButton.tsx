'use client';

import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  id?: string;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  id,
}: GlowButtonProps) {
  const variantClasses: Record<string, string> = {
    primary:
      'bg-white text-[#080808] border border-white/90 hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(255,255,255,0.14)] transition-all duration-200',
    secondary:
      'bg-white/[0.06] text-white/70 border border-white/12 hover:border-white/22 hover:bg-white/[0.09] hover:text-white transition-all duration-200',
    outline:
      'bg-transparent text-white/60 border border-white/12 hover:border-white/24 hover:text-white/90 hover:bg-white/[0.04] transition-all duration-200',
  };

  const baseClasses = [
    'relative inline-flex items-center justify-center gap-2',
    'rounded-xl px-6 py-2.5 text-[14px] font-semibold',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    variantClasses[variant],
    className,
  ].join(' ');

  const content = (
    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
      {children}
    </span>
  );

  if (href) {
    return (
      <a id={id} href={href} onClick={onClick} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
