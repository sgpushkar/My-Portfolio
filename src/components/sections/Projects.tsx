// src/components/sections/Projects.tsx
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Projects</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          What I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[22px] stagger-children reveal">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card p-5 sm:p-8 flex flex-col"
            >
              <div
                className={`font-display text-[0.65rem] tracking-[3px] uppercase mb-4 ${
                  project.featured ? "text-[#aaa]" : "text-[#555]"
                }`}
              >
                {project.featured ? "✦ Main Project" : ""}
              </div>

              <div className="font-display text-[1.2rem] font-bold text-white mb-2 leading-[1.2]">
                {project.name} {project.emoji}
              </div>

              <p className="text-[#999] text-[0.88rem] leading-[1.72] mb-4">
                {project.desc}
              </p>

              <ul className="list-none mb-5 space-y-1">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-[0.82rem] text-[#bbb] flex items-start gap-2"
                  >
                    <span className="text-[#777] text-[0.65rem] flex-shrink-0 mt-[3px]">
                      ▸
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

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