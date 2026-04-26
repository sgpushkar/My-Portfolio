// src/components/sections/FinalCTA.tsx
'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative w-full bg-[#080808]">
      <div className="divider" />
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 65%)',
          }}
        >
          {/* Subtle grid lines inside card */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative z-10 px-7 sm:px-14 py-14 sm:py-20 flex flex-col items-center text-center">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-[12px] font-medium text-white/45 tracking-wide">
                Currently taking 2 new projects
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-syne text-[2.2rem] sm:text-[3.2rem] lg:text-[4rem] font-extrabold leading-tight text-white max-w-3xl">
              Ready to build something real?
            </h2>

            {/* Subtext */}
            <p className="mt-5 text-[15px] sm:text-[17px] text-white/40 max-w-xl leading-relaxed">
              I respond within 24 hours. Tell me what you need and I&apos;ll come back with a
              clear proposal — no fluff, no hard sell.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <a
                id="final-cta-primary"
                href="#contact"
                className="btn btn-primary px-8 py-4 text-[15px] font-semibold rounded-xl"
              >
                Get a Quote →
              </a>
              <a
                id="final-cta-secondary"
                href="#work"
                className="btn btn-ghost px-8 py-4 text-[15px] rounded-xl"
              >
                Browse My Work
              </a>
            </div>

            {/* Micro-trust row */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-[12px] text-white/25">
              <span>✓ Fast response time</span>
              <span>✓ Clear scope & pricing</span>
              <span>✓ You own your code</span>
              <span>✓ Deployed & tested</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
