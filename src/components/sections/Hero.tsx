// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

const TRUST_BADGES = [
  '7 Projects Shipped',
  'AI Intern @ Reva Technologies',
  'Full-Stack & AI',
  'Based in Mumbai',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Subtle radial glow at top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.055) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal grid lines — editorial texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '100% 80px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div {...fadeUp(0)} className="mb-8 flex justify-center">
            <img 
              src="/logo_icon.png" 
              alt="PM Logo" 
              className="h-16 w-16 object-contain brightness-125"
            />
          </motion.div>

          {/* Label */}
          <motion.div {...fadeUp(0.05)} className="mb-6 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white/40">
              Available for new projects
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-[2.3rem] sm:text-[3.3rem] lg:text-[4.4rem] font-bold leading-[1.05] tracking-tight text-white"
          >
            I Build Things That Feel As Good As They{' '}
            <span
              className="relative inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #fff 0%, #aaa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Look.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl mx-auto text-[1.05rem] sm:text-[1.15rem] leading-relaxed text-white/50"
          >
            For startups, local businesses, and personal brands that need a site
            that <em className="text-white/75 not-italic font-medium">works</em> — not just one
            that looks good on Behance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.24)}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              id="hero-cta-primary"
              href="#contact"
              className="btn btn-primary px-7 py-3.5 text-[15px] font-semibold rounded-xl"
            >
              Get Your Website →
            </a>
            <a
              id="hero-cta-secondary"
              href="#work"
              className="btn btn-ghost px-7 py-3.5 text-[15px] rounded-xl"
            >
              See My Work
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.32)}
            className="mt-12 flex flex-wrap gap-2 justify-center"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium text-white/40 border border-white/[0.08] bg-white/[0.03] font-mono"
              >
                <span className="w-1 h-1 rounded-full bg-white/30" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
