// src/components/sections/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { EDUCATION_SUBJECTS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-16 sm:py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 right-1/4 w-96 h-96 bg-accent-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionHeading subtitle="Formal learning & coursework">Education</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-16 bg-bg-secondary/40 border border-accent-muted/15 rounded-lg p-6 sm:p-10 hover:border-accent-primary/40 transition-all"
        >
          <h3 className="text-xl sm:text-2xl font-black text-accent-default mb-2">
            Diploma in Computer Engineering
          </h3>
          <p className="text-accent-warm font-semibold mb-2">
            Pillai Higher Education Institute, Mumbai
          </p>
          <p className="text-accent-muted mb-8">Final Year (2025-2026)</p>

          <div>
            <h4 className="text-lg font-bold text-accent-warm mb-6 uppercase tracking-widest">
              Core Subjects & Topics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION_SUBJECTS.map((subject, i) => (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-3 p-3 bg-accent-primary/5 rounded-lg border border-accent-primary/20 hover:border-accent-primary/50 transition-all"
                >
                  <div className="w-2 h-2 bg-accent-warm rounded-full" />
                  <span className="text-accent-muted">{subject}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
