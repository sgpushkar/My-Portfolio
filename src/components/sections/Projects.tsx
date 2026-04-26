// src/components/sections/Projects.tsx
'use client';

import { PROJECTS } from '@/lib/data';
import { motion } from 'framer-motion';

const FEATURED = PROJECTS.filter((p) => p.featured);

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-transparent">
      <div className="divider" />
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="section-label mb-4">Case Studies</p>
            <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-extrabold leading-tight text-white">
              Real problems.{' '}
              <span className="text-white/40">Real solutions.</span>{' '}
              Real results.
            </h2>
          </div>
          <a
            href="https://github.com/sgpushkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-[13px] text-white/35 hover:text-white/65 transition-colors flex items-center gap-1.5"
          >
            View all on GitHub
            <span>↗</span>
          </a>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-6">
          {FEATURED.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="card group overflow-hidden"
            >
              <div className="p-7 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">

                  {/* Left — meta */}
                  <div className="flex flex-col">
                    {/* Number + name */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-white/20 font-inter">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="w-6 h-[1px] bg-white/15" />
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/15 text-white/35">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-[1.7rem] sm:text-[2rem] font-extrabold text-white leading-tight mb-3">
                      {project.name}
                    </h3>

                    <p className="text-[14px] text-white/40 italic leading-relaxed mb-6">
                      &ldquo;{project.hook}&rdquo;
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tag">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.06]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        GitHub ↗
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] text-white/70 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — case study */}
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-0 border border-white/[0.07] rounded-xl overflow-hidden">
                    {/* Problem */}
                    <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-3 font-semibold">
                        Problem
                      </p>
                      <p className="text-[14px] text-white/55 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-5 sm:p-6 border-b border-white/[0.07]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-3 font-semibold">
                        Solution
                      </p>
                      <p className="text-[14px] text-white/55 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Result — full width */}
                    <div className="sm:col-span-2 p-5 sm:p-6 bg-white/[0.025]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-3 font-semibold">
                        Result
                      </p>
                      <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Non-featured projects — compact list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/25 mb-4">More projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROJECTS.filter((p) => !p.featured).map((project) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card group p-5 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <p className="font-mono text-[1rem] font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                  {project.name}
                </p>
                <p className="text-[12px] text-white/35 leading-relaxed line-clamp-2">
                  {project.hook}
                </p>
                <p className="mt-3 text-[11px] text-white/25 group-hover:text-white/45 transition-colors">
                  View on GitHub →
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
