// src/components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Technologies I master">Skills & Expertise</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-bg-secondary/40 border border-accent-muted/15 rounded-lg p-8 hover:border-accent-primary/40 transition-all"
            >
              <h3 className="text-lg font-black text-accent-warm mb-6 uppercase tracking-widest">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary rounded-full text-sm font-medium hover:border-accent-primary/60 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}