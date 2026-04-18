// src/components/sections/Projects.tsx
'use client';

import { PROJECTS } from '@/lib/data';
import { getIcon } from '@/lib/iconMap';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowButton from '@/components/ui/GlowButton';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="relative w-full py-16 sm:py-24"
    >
      {/* Subtle accent blob */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading 
          subtitle="Real solutions that ship"
          align="left"
        >
          Featured Projects
        </SectionHeading>

        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {PROJECTS.map((project, index) => {
            // Vary card style based on index
            const isAlt = index % 2 === 1;
            const Icon = getIcon(project.emoji);
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="relative group overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Card background - subtle and intentional */}
                <div
                  className={`relative h-full backdrop-blur-sm border transition-all duration-300 group-hover:shadow-depth-md ${
                    isAlt
                      ? 'border-accent-primary/20 bg-accent-primary/5 hover:border-accent-primary/40'
                      : 'border-accent-muted/15 bg-bg-secondary/40 hover:border-accent-warm/30'
                  }`}
                >
                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                    {/* Header with index and badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent-muted">
                        <span>{String(index + 1).padStart(2, '0')} —</span>
                        {Icon && <Icon className="w-5 h-5 text-accent-warm" />}
                      </div>
                      {project.featured && (
                        <div className="px-3 py-1 rounded-full text-xs font-bold bg-accent-warm/20 text-accent-warm border border-accent-warm/30">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl lg:text-3xl font-black text-accent-default">
                      {project.name}
                    </h3>

                    {/* Hook/quote */}
                    {project.hook && (
                      <p className="mb-6 text-accent-warm font-semibold italic">
                        "{project.hook}"
                      </p>
                    )}

                    {/* Problem & Solution - clean layout */}
                    <div className="mb-8 space-y-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent-muted mb-2">
                          Problem
                        </p>
                        <p className="text-accent-muted leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent-muted mb-2">
                          Solution
                        </p>
                        <p className="text-accent-muted leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {project.impact && (
                        <div className="border-t border-accent-muted/10 pt-6">
                          <p className="text-xs font-semibold uppercase tracking-widest text-accent-warm mb-2">
                            Impact
                          </p>
                          <p className="text-accent-default font-medium">
                            {project.impact}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Tech stack */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent-muted mb-3">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              className="px-3 py-1.5 text-xs font-medium rounded-md bg-accent-muted/10 text-accent-muted hover:bg-accent-warm/15 hover:text-accent-warm transition-colors duration-200 border border-accent-muted/10"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA buttons */}
                    <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t border-accent-muted/10">
                      <GlowButton 
                        variant="primary" 
                        href={project.githubUrl}
                        className="text-xs"
                      >
                        Code
                      </GlowButton>
                      {project.liveUrl && (
                        <GlowButton 
                          variant="secondary" 
                          href={project.liveUrl}
                          className="text-xs"
                        >
                          Live Demo
                        </GlowButton>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          <p className="mb-8 text-accent-muted">
            Curious for more? Explore the full repository
          </p>
          <div className="inline-flex items-center gap-3">
            <GlowButton
              variant="outline"
              href="https://github.com/sgpushkar"
            >
              View on GitHub
            </GlowButton>
            {(() => {
              const ArrowIcon = getIcon('→');
              return ArrowIcon ? <ArrowIcon className="w-5 h-5 text-accent-warm" /> : null;
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
