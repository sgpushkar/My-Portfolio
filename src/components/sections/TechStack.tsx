// src/components/sections/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/data';
import { getIcon } from '@/lib/iconMap';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative w-full py-16 sm:py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-warm/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Building with modern tools">Tech Arsenal</SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-16">
          {TECH_STACK.map((tech, i) => {
            const Icon = getIcon(tech.icon);
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 8) * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                className="group bg-bg-secondary/40 border border-accent-muted/15 rounded-lg p-6 text-center hover:border-accent-warm/30 transition-all cursor-pointer"
              >
                {Icon && <Icon className="w-8 h-8 mx-auto mb-2 text-accent-warm" />}
                <h4 className="text-sm font-bold text-accent-default mb-1">{tech.name}</h4>
                <p className="text-xs text-accent-muted">{tech.tip}</p>
                <div className="mt-3 h-0.5 bg-accent-muted/20 group-hover:bg-accent-warm/40 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}