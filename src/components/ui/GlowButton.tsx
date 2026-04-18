'use client';

import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const variantClasses = {
    primary:
      'border border-accent-warm/40 bg-accent-warm/12 text-accent-warm hover:border-accent-warm/70 hover:bg-accent-warm/18 transition-all duration-300',
    secondary:
      'border border-accent-primary/40 bg-accent-primary/10 text-accent-primary hover:border-accent-primary/70 hover:bg-accent-primary/16 transition-all duration-300',
    outline:
      'border border-accent-muted/40 bg-transparent text-accent-default hover:border-accent-muted/70 hover:bg-accent-muted/8 transition-all duration-300',
  };

  const baseClasses = [
    'relative inline-flex items-center justify-center',
    'rounded-lg px-6 py-2.5 text-sm font-semibold uppercase tracking-wide',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    variantClasses[variant],
    className,
  ].join(' ');

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
