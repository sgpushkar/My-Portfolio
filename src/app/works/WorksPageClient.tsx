// src/app/works/WorksPageClient.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';
import Footer from '@/components/layout/Footer';

/* ───────────────────────── helpers ───────────────────────── */

// Collect unique tags across all projects
function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/* ───────────────────────── animations ───────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ═══════════════════════════════════════════════════════════ */
/*                     WorksPageClient                        */
/* ═══════════════════════════════════════════════════════════ */

export default function WorksPageClient() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const allTags = useMemo(() => getAllTags(PROJECTS), []);

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="overflow-hidden min-h-screen">
      {/* ─── Hero Header ─────────────────────────────────── */}
      <section className="relative w-full pt-36 sm:pt-44 pb-12 sm:pb-16">
        <div className="section-wrap !pt-0 !pb-0">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-10"
          >
            <Link
              href="/"
              className="text-[12px] font-mono text-white/30 hover:text-white/60 transition-colors"
            >
              Home
            </Link>
            <span className="text-white/15 text-[11px]">/</span>
            <span className="text-[12px] font-mono text-white/60">Works</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="section-label mb-5">Portfolio</p>
            <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.05] text-white max-w-3xl">
              All my{' '}
              <span className="text-white/35">works</span>
              <span className="text-white/20">.</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] text-white/40 leading-relaxed max-w-xl font-mono">
              Every project tells a story — a problem found, a solution built, a
              result delivered. Here&apos;s everything I&apos;ve shipped.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-8 mt-10 pt-8 border-t border-white/[0.06]"
          >
            {[
              { value: PROJECTS.length, label: 'Projects' },
              { value: PROJECTS.filter((p) => p.featured).length, label: 'Featured' },
              { value: allTags.length, label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[1.6rem] sm:text-[2rem] font-extrabold text-white font-display leading-none">
                  {stat.value}
                </span>
                <span className="text-[11px] text-white/30 uppercase tracking-[0.16em] mt-1.5 font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Dropdown ──────────────────────────────── */}
      <section className="relative w-full">
        <div className="section-wrap !pt-0 !pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <label className="text-[12px] font-mono text-white/40 uppercase tracking-[0.1em]">
              Filter:
            </label>
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg text-[12px] font-mono font-medium tracking-wide transition-all duration-200 border bg-white/[0.03] border-white/[0.08] text-white/80 hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:border-white/40 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer appearance-none pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 4.5L6 8L9.5 4.5' stroke='%23ffffff' stroke-opacity='0.5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundSize: '12px',
              }}
            >
              <option value="All">All ({PROJECTS.length})</option>
              {allTags.map((tag) => {
                const count = PROJECTS.filter((p) => p.tags.includes(tag)).length;
                return (
                  <option key={tag} value={tag}>
                    {tag} ({count})
                  </option>
                );
              })}
            </select>
          </motion.div>
        </div>
      </section>

      {/* ─── Project Cards ───────────────────────────────── */}
      <section className="relative w-full">
        <div className="section-wrap !pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isExpanded={expandedId === project.id}
                  onToggle={() => toggleExpand(project.id)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/30 text-[14px] font-mono">
                No projects found for &ldquo;{activeFilter}&rdquo;
              </p>
              <button
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-[13px] text-white/50 hover:text-white transition-colors underline underline-offset-4"
              >
                Clear filter
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*                       ProjectCard                          */
/* ═══════════════════════════════════════════════════════════ */

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      className="card group"
    >
      {/* ── Clickable header ──────────────────────────────── */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-8 lg:p-10 focus:outline-none"
        aria-expanded={isExpanded}
        id={`project-${project.id}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          {/* Left: meta */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-white/20 font-inter">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-5 h-[1px] bg-white/15" />
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/15 text-white/35">
                  Featured
                </span>
              )}
              <span className="text-lg">{project.emoji}</span>
            </div>

            <h2 className="font-display text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-extrabold text-white leading-tight">
              {project.name}
            </h2>

            <p className="mt-2 text-[14px] text-white/40 italic leading-relaxed max-w-xl">
              &ldquo;{project.hook}&rdquo;
            </p>

            {/* Tags (always visible) */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: expand indicator */}
          <div className="flex items-center gap-4 lg:flex-shrink-0">
            {/* Links — always visible */}
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[12px] text-white/35 hover:text-white transition-colors font-mono"
              >
                GitHub ↗
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[12px] text-white/60 hover:text-white transition-colors font-mono font-medium"
                >
                  Live Demo ↗
                </a>
              )}
            </div>

            {/* Expand chevron */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-white/40"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </button>

      {/* ── Expandable detail ─────────────────────────────── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="detail"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={expandVariants}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 lg:px-10 pb-8 lg:pb-10">
              {/* Separator */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Case study grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Problem */}
                <div className="p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-400/60" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold font-mono">
                      Problem
                    </p>
                  </div>
                  <p className="text-[14px] text-white/55 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400/60" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold font-mono">
                      Solution
                    </p>
                  </div>
                  <p className="text-[14px] text-white/55 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Result */}
                <div className="p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.025]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold font-mono">
                      Result
                    </p>
                  </div>
                  <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Long description (placeholder) */}
              {project.longDescription && (
                <div className="mt-6 p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold font-mono mb-3">
                    Deep Dive
                  </p>
                  <p className="text-[14px] text-white/50 leading-[1.8]">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {/* Features list */}
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold font-mono mb-4">
                  Key Features
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, fi) => (
                    <motion.div
                      key={fi}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fi * 0.04, duration: 0.3 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                      <span className="text-[13px] text-white/50 leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Meta row: role, timeline, screenshots placeholder */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-5 border-t border-white/[0.05]">
                {project.role && (
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/20 font-mono mb-1">
                      Role
                    </span>
                    <span className="text-[13px] text-white/55 font-medium">
                      {project.role}
                    </span>
                  </div>
                )}
                {project.timeline && (
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/20 font-mono mb-1">
                      Timeline
                    </span>
                    <span className="text-[13px] text-white/55 font-medium">
                      {project.timeline}
                    </span>
                  </div>
                )}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/20 font-mono mb-1">
                      Screenshots
                    </span>
                    <span className="text-[13px] text-white/35 font-mono">
                      {project.screenshots.length} images
                    </span>
                  </div>
                )}
              </div>

              {/* Screenshots gallery placeholder */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.screenshots.map((src, si) => (
                    <div
                      key={si}
                      className="aspect-video rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${si + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
