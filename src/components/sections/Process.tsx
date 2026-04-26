// src/components/sections/Process.tsx
'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-[#080808]">
      <div className="divider" />
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label mb-4">Process</p>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white">
            Here&apos;s exactly how{' '}
            <span className="text-white/40">we work together.</span>
          </h2>
          <p className="mt-4 text-[15px] text-white/40 leading-relaxed">
            No mystery, no vague timelines. A clear process so you always know what happens next.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div
            aria-hidden
            className="absolute left-[31px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-white/12 via-white/06 to-transparent hidden md:block"
          />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex gap-6 sm:gap-8 group"
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-[63px] h-[63px] rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center group-hover:border-white/22 group-hover:bg-white/[0.06] transition-all duration-300">
                    <span className="font-mono text-[13px] font-bold text-white/40 group-hover:text-white/60 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 pt-3">
                  <h3 className="font-mono text-[1.15rem] sm:text-[1.3rem] font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 card p-7 border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <div className="flex-1">
            <p className="font-mono text-[1.05rem] font-bold text-white mb-1">
              Typical turnaround: 3–7 days
            </p>
            <p className="text-[14px] text-white/40">
              Depending on scope. Landing pages are often live within 72 hours of kickoff.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 btn btn-primary text-[14px] px-6 py-2.5 rounded-xl"
          >
            Start a Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
