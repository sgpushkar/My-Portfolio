// src/components/sections/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/3 left-0 w-96 h-96 rounded-full bg-accent-warm/4 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionHeading subtitle="Real-world work experience">Professional Experience</SectionHeading>

        <div className="mt-16 space-y-4 sm:space-y-6">
          {EXPERIENCE_ITEMS.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-bg-secondary/40 border border-accent-muted/15 rounded-lg p-6 sm:p-8 hover:border-accent-primary/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-accent-default">{exp.role}</h3>
                  <p className="text-sm sm:text-base text-accent-warm font-semibold">@ {exp.org}</p>
                  {exp.location && (
                    <p className="text-xs sm:text-sm text-accent-muted mt-1">{exp.location}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-accent-muted leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
