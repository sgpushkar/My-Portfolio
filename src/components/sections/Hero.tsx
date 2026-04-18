'use client';

import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

export default function Hero() {
  const stats = [
    { value: '4', label: 'Products', subtext: 'Shipped & live' },
    { value: '3+', label: 'Years', subtext: 'Building professionally' },
    { value: '10+', label: 'Tech stacks', subtext: 'Full mastery' },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary pt-40 sm:pt-44 md:pt-52"
    >
      {/* Subtle background accent blob (just one, not multiple) */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-accent-warm/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(149,164,175,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(149,164,175,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.4),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto">
        <div className="flex flex-col gap-12 sm:gap-16 lg:flex-row lg:justify-between lg:items-end">
          {/* Main content - offset left with breathing room */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Status badge - simple and subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-2 sm:mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-accent-warm" />
              <span className="text-sm font-medium text-accent-muted">
                Available for opportunities
              </span>
            </motion.div>

            {/* Descriptor - soft and intentional */}
            <p className="text-xs sm:text-sm uppercase tracking-widest text-accent-muted mb-3 sm:mb-4">
              Full-Stack Engineer & AI Builder
            </p>

            {/* Main headline - bold and slightly offset */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 text-accent-default mix-blend-lighten">
              Crafting{' '}
              <span className="text-accent-warm">intentional</span>
              {' '}
              software that
              works.
            </h1>

            {/* Description - warm and conversational */}
            <p className="text-sm sm:text-lg leading-relaxed text-accent-muted max-w-xl mb-8 sm:mb-10">
              I build full-stack applications, AI systems, and polished interfaces that are clean, purposeful, and genuinely human. Not another generic SaaS clone.
            </p>

            {/* CTA Buttons - primary focus */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <GlowButton href="#projects" className="px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm">
                View my work
              </GlowButton>
              <GlowButton href="#contact" variant="outline" className="px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm">
                Talk to me
              </GlowButton>
            </div>
          </motion.div>

          {/* Stats sidebar - intentionally offset right and slightly down */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto lg:max-w-sm mt-8 lg:mt-0"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative group"
              >
                {/* Subtle background - one color, intentional */}
                <div className="absolute inset-0 bg-bg-secondary rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-3 sm:p-4 lg:p-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-warm mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-accent-default mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-accent-muted leading-tight">
                    {stat.subtext}
                  </div>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-lg border border-accent-warm/0 group-hover:border-accent-warm/20 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - very subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-accent-muted uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-accent-warm"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
