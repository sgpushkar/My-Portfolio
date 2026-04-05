// src/components/sections/Projects.tsx
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Work That Ships</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          What I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[22px] stagger-children reveal">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card p-5 sm:p-8 flex flex-col"
            >
              {project.featured && (
                <div className="font-display text-[0.65rem] tracking-[3px] uppercase mb-4 text-[color:var(--text-soft)]">
                  ✦ Main Project
                </div>
              )}

              {/* Hook */}
              <div className="text-[0.85rem] text-[color:var(--text-soft)] italic mb-2 leading-tight">
                “{project.hook}”
              </div>

              {/* Title */}
              <div className="font-display text-[1.2rem] font-bold text-[color:var(--text-strong)] mb-2 leading-[1.2]">
                {project.name} {project.emoji}
              </div>

              {/* Problem */}
              <div className="text-[0.75rem] text-[color:var(--text-subtle)] uppercase tracking-wider mt-1 mb-1">
                Problem
              </div>
              <p className="text-[color:var(--text-muted)] text-[0.88rem] leading-[1.5] mb-2">
                {project.problem}
              </p>

              {/* What I built */}
              <div className="text-[0.75rem] text-[color:var(--text-subtle)] uppercase tracking-wider mt-1 mb-1">
                What I built
              </div>
              <p className="text-[color:var(--text-muted)] text-[0.88rem] leading-[1.5] mb-2">
                {project.desc}
              </p>

              {/* Impact */}
              <div className="text-[0.75rem] text-[color:var(--text-subtle)] uppercase tracking-wider mt-1 mb-1">
                Impact
              </div>
              <p className="text-[color:var(--text-soft)] text-[0.85rem] font-medium mb-3">
                {project.impact}
              </p>

              {/* Features (optional, keep if you want) */}
              {project.features && project.features.length > 0 && (
                <>
                  <div className="text-[0.75rem] text-[color:var(--text-subtle)] uppercase tracking-wider mt-1 mb-1">
                    Key features
                  </div>
                  <ul className="list-none mb-5 space-y-1">
                    {project.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="text-[0.82rem] text-[color:var(--text-soft)] flex items-start gap-2"
                      >
                        <span className="text-[color:var(--text-subtle)] text-[0.65rem] flex-shrink-0 mt-[3px]">
                          ▸
                        </span>
                        {f}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-[0.7rem] text-[color:var(--text-subtle)] mt-1">+ more</li>
                    )}
                  </ul>
                </>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link primary"
                >
                  GitHub ↗
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
