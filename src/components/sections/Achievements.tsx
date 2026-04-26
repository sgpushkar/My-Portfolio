// src/components/sections/Achievements.tsx
'use client';

import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/lib/data';
import { getIcon } from '@/lib/iconMap';

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-transparent">
      <div className="divider" />
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-4">Milestones</p>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white">
            Proof of <span className="text-white/40">excellence.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card group p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-white/20 transition-colors">
                    {Icon ? <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" /> : <span className="text-xl">{achievement.icon}</span>}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-bold tracking-wider text-white/30 uppercase">{achievement.year}</span>
                      <div className="w-4 h-[1px] bg-white/10" />
                      <span className="text-[11px] font-bold tracking-wider text-white/50 uppercase">{achievement.type}</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-bold text-white mb-2 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-[14px] text-white/40 leading-relaxed">
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
