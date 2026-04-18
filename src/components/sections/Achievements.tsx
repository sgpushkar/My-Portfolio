// src/components/sections/Achievements.tsx
'use client';

import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/lib/data';
import { getIcon } from '@/lib/iconMap';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionHeading subtitle="Proof of excellence">Achievements & Awards</SectionHeading>

        <div className="mt-16 space-y-6">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: false }}
                className="group bg-bg-secondary/40 border border-accent-muted/15 rounded-lg p-8 hover:border-accent-warm/30 transition-all"
              >
                <div className="flex gap-6">
                  {Icon && <Icon className="w-8 h-8 flex-shrink-0 text-accent-warm" />}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-xl font-black text-accent-default">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-mono text-accent-warm">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-accent-warm mb-3">
                      {achievement.type}
                    </p>
                    <p className="text-accent-muted leading-relaxed">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
