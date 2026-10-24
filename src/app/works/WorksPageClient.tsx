// src/app/works/WorksPageClient.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';

// Collect unique tags across all projects
function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--tx)] font-[family-name:var(--m)] antialiased">
      {/* ─── Top Navigation Bar (HUD style matching the main site) ─── */}
      <header className="sticky top-0 z-40 w-full bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--g1)] px-5 sm:px-8 py-4 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--s)] text-[24px] tracking-normal capitalize text-[var(--tx)] hover:text-[var(--g3)] transition-colors"
          >
            P.M
          </Link>
          <span className="hidden sm:inline-block text-[var(--g2)]">/</span>
          <span className="hidden sm:inline-block text-[var(--tm)]">
            Works Archive
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-[var(--tx)] hover:text-[var(--g3)] transition-colors flex items-center gap-1.5"
          >
            <span>←</span> The Long Walk
          </Link>
          <a
            href="mailto:pushkarmhatre007@gmail.com"
            className="hidden sm:inline-block text-[var(--tm)] hover:text-[var(--tx)] transition-colors"
          >
            Say Hi
          </a>
        </nav>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="max-w-[1140px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[11px] text-[var(--tm)] tracking-[0.14em] uppercase">
          <Link href="/" className="hover:text-[var(--tx)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--tx)]">Works</span>
        </div>

        {/* Title */}
        <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--tm)] mb-4">
          Pushkar Mhatre · Portfolio &amp; Case Studies
        </p>

        <h1 className="font-[family-name:var(--s)] text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1] text-[var(--tx)] tracking-[-0.01em]">
          All My <i className="text-[var(--tm)] not-italic">Works</i>.
        </h1>

        <p className="mt-6 text-[15px] sm:text-[16px] text-[var(--tm)] max-w-2xl leading-relaxed">
          Every project tells a story — a problem found, an architecture chosen, a
          real result delivered. From creative storefronts to biometric AI pipelines,
          here is everything I&apos;ve shipped.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 pt-8 border-t border-[var(--g1)] max-w-lg">
          <div>
            <span className="font-[family-name:var(--s)] text-[2.4rem] sm:text-[3rem] leading-none text-[var(--tx)]">
              {PROJECTS.length}
            </span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] mt-2">
              Projects
            </p>
          </div>
          <div>
            <span className="font-[family-name:var(--s)] text-[2.4rem] sm:text-[3rem] leading-none text-[var(--tx)]">
              {PROJECTS.filter((p) => p.featured).length}
            </span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] mt-2">
              Featured
            </p>
          </div>
          <div>
            <span className="font-[family-name:var(--s)] text-[2.4rem] sm:text-[3rem] leading-none text-[var(--tx)]">
              {allTags.length}
            </span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] mt-2">
              Tech Tags
            </p>
          </div>
        </div>
      </section>

      {/* ─── Filter Section ─── */}
      <section className="max-w-[1140px] mx-auto px-5 sm:px-8 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)]">
            Filter:
          </span>
          <div className="relative inline-block">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="appearance-none bg-[var(--bg)] border border-[var(--ink)] text-[var(--tx)] px-4 py-2 pr-8 rounded-none text-[12px] uppercase tracking-[0.12em] cursor-pointer hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors focus:outline-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 4.5L6 8L9.5 4.5' stroke='%230c0c0c' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundSize: '10px',
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
          </div>

          {/* Quick Filter Tag Pills */}
          <div className="hidden lg:flex flex-wrap gap-2 ml-4">
            {['React', 'Next.js 14', 'Python', 'AI', 'TypeScript', 'Node.js'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveFilter(activeFilter === tag ? 'All' : tag)}
                className={`text-[11px] px-3 py-1 rounded-full border transition-colors ${
                  activeFilter === tag
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]'
                    : 'border-[var(--g1)] text-[var(--tm)] hover:border-[var(--ink)] hover:text-[var(--tx)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects List ─── */}
      <section className="max-w-[1140px] mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectAccordionCard
                key={project.id}
                project={project}
                index={i}
                isExpanded={expandedId === project.id}
                onToggle={() => toggleExpand(project.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 border border-dashed border-[var(--g1)] mt-8">
            <p className="text-[var(--tm)] text-[14px]">
              No projects found matching &ldquo;{activeFilter}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-[12px] uppercase tracking-[0.14em] text-[var(--tx)] border-b border-[var(--tx)] pb-0.5"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ─── Minimalist Footer ─── */}
      <footer className="border-t border-[var(--g1)] px-5 sm:px-8 py-12 text-[12px] text-[var(--tm)]">
        <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-[family-name:var(--s)] text-[18px] text-[var(--tx)]">
              Pushkar Mhatre
            </span>
            <span>Full-Stack Web &amp; AI Developer · Mumbai, India</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[var(--tx)] transition-colors">
              The Long Walk
            </Link>
            <a
              href="https://github.com/sgpushkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--tx)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-buildyn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--tx)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:pushkarmhatre007@gmail.com"
              className="hover:text-[var(--tx)] transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Individual Project Accordion Card
   ───────────────────────────────────────────────────────────── */

function ProjectAccordionCard({
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
      exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
      className={`border transition-all duration-300 ${
        isExpanded
          ? 'border-[var(--ink)] bg-[var(--bg)] shadow-[4px_4px_0_var(--g1)]'
          : 'border-[var(--g1)] hover:border-[var(--g2)] bg-[var(--bg)]'
      }`}
    >
      {/* ─── Card Header Bar (Clickable) ─── */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-8 focus:outline-none cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left Metadata */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-[family-name:var(--s)] text-[1.4rem] leading-none text-transparent [-webkit-text-stroke:1px_var(--g2)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-5 h-[1px] bg-[var(--g1)]" />
              {project.featured && (
                <span className="border border-[var(--tm)] text-[var(--tm)] px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-medium">
                  Featured
                </span>
              )}
              <span className="text-base">{project.emoji}</span>
            </div>

            <h2 className="font-[family-name:var(--s)] text-[1.8rem] sm:text-[2.2rem] text-[var(--tx)] leading-tight">
              {project.name}
            </h2>

            <p className="mt-2 text-[14px] text-[var(--tm)] italic leading-relaxed max-w-2xl">
              &ldquo;{project.hook}&rdquo;
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--g1)] bg-[var(--bg)] text-[var(--tm)] px-2.5 py-0.5 rounded-full text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Action Links & Chevron */}
          <div className="flex items-center gap-5 lg:flex-shrink-0 pt-2 lg:pt-0">
            <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.1em]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[var(--tm)] hover:text-[var(--tx)] border-b border-transparent hover:border-[var(--tx)] transition-all pb-0.5"
              >
                GitHub ↗
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[var(--tx)] font-semibold border-b border-[var(--tx)] pb-0.5 transition-all"
                >
                  Live Demo ↗
                </a>
              )}
            </div>

            {/* Toggle Arrow */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="w-8 h-8 rounded-full border border-[var(--g1)] flex items-center justify-center flex-shrink-0 text-[var(--tm)]"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
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

      {/* ─── Expandable Case Study Deep Dive ─── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="details"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={expandVariants}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 pt-2">
              <div className="w-full h-[1px] bg-[var(--g1)] mb-6" />

              {/* Case Study Grid (Problem / Solution / Result) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Problem */}
                <div className="p-5 border border-[var(--g1)] bg-[var(--bg)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] font-semibold">
                      Problem
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--tx)] leading-relaxed mt-2">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 border border-[var(--g1)] bg-[var(--bg)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] font-semibold">
                      Solution
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--tx)] leading-relaxed mt-2">
                    {project.desc}
                  </p>
                </div>

                {/* Result */}
                <div className="p-5 border border-[var(--g1)] bg-[var(--bg)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] font-semibold">
                      Result
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--tx)] font-medium leading-relaxed mt-2">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="mt-6 pt-5 border-t border-[var(--g1)]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--tm)] font-semibold mb-3">
                  Key Deliverables &amp; Features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, fi) => (
                    <div
                      key={fi}
                      className="flex items-start gap-2.5 text-[13px] text-[var(--tm)]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--ink)] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
