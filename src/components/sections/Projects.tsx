// src/components/sections/Projects.tsx
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2]">
      <div className="max-w-[1120px] mx-auto px-12 py-[110px]">
        <span className="section-label">Projects</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,4vw,3rem)] leading-[1.08] mb-[60px]">
          What I&apos;ve Built
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px] stagger-children reveal">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card p-8 flex flex-col"
            >
              {/* Number / featured label */}
              <div
                className={`font-display text-[0.65rem] tracking-[3px] uppercase mb-[14px] ${
                  project.featured ? "text-[#aaa]" : "text-[#555]"
                }`}
              >
                {project.featured ? "✦ Main Project" : ""}
              </div>

              {/* Name */}
              <div className="font-display text-[1.28rem] font-bold text-white mb-[10px] leading-[1.2]">
                {project.name} {project.emoji}
              </div>

              {/* Description */}
              <p className="text-[#999] text-[0.88rem] leading-[1.72] mb-[18px]">
                {project.desc}
              </p>

              {/* Features */}
              <ul className="list-none mb-5 space-y-[3px]">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-[0.82rem] text-[#bbb] flex items-center gap-[9px]"
                  >
                    <span className="text-[#777] text-[0.65rem] flex-shrink-0">
                      ▸
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-[6px] mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-[10px]">
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
