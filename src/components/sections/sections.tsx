// ─── About.tsx ───────────────────────────────────────────────
// src/components/sections/About.tsx
import { EDUCATION_SUBJECTS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">About</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Who I Am
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Text card */}
          <div className="glass-card about-text reveal-left p-6 sm:p-10">
            <p className="text-[#b8b8b8] leading-[1.85] mb-[18px] text-[0.97rem]">
              I&apos;m a{" "}
              <strong className="text-[#f0f0f0] font-medium">
                final-year Diploma in Computer Engineering student
              </strong>{" "}
              at Pillai HOC College of Engineering who builds projects to learn
              and to solve real problems.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-[18px] text-[0.97rem]">
              I enjoy working on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                AI apps, backend systems, and full-stack applications
              </strong>
              . Whether it&apos;s an AI-powered attendance system, an
              emotion-based chatbot, or a REST API backend, I focus on building
              things that actually work — not just demos.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] mb-[18px] text-[0.97rem]">
              I&apos;ve worked on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                internship, freelance, and personal projects
              </strong>
              , both solo and in teams. I like experimenting with new tools,
              integrating APIs, and figuring out how to automate repetitive
              tasks or build something useful from scratch.
            </p>
            <p className="text-[#b8b8b8] leading-[1.85] text-[0.97rem]">
              I&apos;m always looking to work on{" "}
              <strong className="text-[#f0f0f0] font-medium">
                interesting problems
              </strong>{" "}
              and grow through real-world experience.
            </p>
          </div>

          {/* Info card */}
          <div className="glass-card reveal p-6 sm:p-9 sm:px-10">
            {[
              { icon: "🎓", label: "Education",   value: "Pillai HOC College of Engineering" },
              { icon: "📅", label: "Year",        value: "Final Year (2023 – 2026)" },
              { icon: "📍", label: "Location",    value: "Mumbai, Maharashtra, India" },
              { icon: "💻", label: "Focus Areas", value: "AI Apps · Backend · Full Stack" },
              { icon: "🚀", label: "Status",      value: "Open to Internship / Freelance / Job" },
              { icon: "📧", label: "Email",       value: "pushkarmhatre007@gmail.com" },
            ].map((row) => (
              <div key={row.label} className="info-row">
                <div className="text-[1.1rem] w-7 text-center flex-shrink-0">{row.icon}</div>
                <div className="min-w-0">
                  <div className="text-[0.7rem] text-[#666] uppercase tracking-[1.5px] mb-[3px]">
                    {row.label}
                  </div>
                  <div className="text-[0.92rem] text-[#eee] font-display break-words">
                    {row.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Skills.tsx ───────────────────────────────────────────────
// src/components/sections/Skills.tsx
import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Skills</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] stagger-children reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card p-6 sm:p-7">
              <div className="skill-cat-title">{cat.title}</div>
              <div className="flex flex-wrap gap-[7px]">
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── TechStack.tsx ────────────────────────────────────────────
// src/components/sections/TechStack.tsx
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Stack</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-[14px] justify-center stagger-children reveal">
          {TECH_STACK.map((item) => (
            <div key={item.name} className="tech-item" data-tip={item.tip}>
              <span className="tech-icon">{item.icon}</span>
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── Projects.tsx ─────────────────────────────────────────────
// src/components/sections/Projects.tsx
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Projects</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          What I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] stagger-children reveal">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card p-6 sm:p-8 flex flex-col"
            >
              <div
                className={`font-display text-[0.65rem] tracking-[3px] uppercase mb-[14px] ${
                  project.featured ? "text-[#aaa]" : "text-[#555]"
                }`}
              >
                {project.featured ? "✦ Main Project" : ""}
              </div>

              <div className="font-display text-[1.2rem] font-bold text-white mb-[10px] leading-[1.2]">
                {project.name} {project.emoji}
              </div>

              <p className="text-[#999] text-[0.88rem] leading-[1.72] mb-[18px]">
                {project.desc}
              </p>

              <ul className="list-none mb-5 space-y-[3px]">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-[0.82rem] text-[#bbb] flex items-start gap-[9px]"
                  >
                    <span className="text-[#777] text-[0.65rem] flex-shrink-0 mt-[3px]">▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-[6px] mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="flex gap-[10px] flex-wrap">
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


// ─── Achievements.tsx ─────────────────────────────────────────
// src/components/sections/Achievements.tsx
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Activities &amp; Competitions</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Activities &amp; Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] stagger-children reveal">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="glass-card ach-card p-6 sm:p-[30px] flex gap-[18px] items-start transition-all duration-[350ms] hover:-translate-y-[6px]"
              style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
            >
              <div className="ach-icon">{ach.icon}</div>
              <div>
                <div className="font-display text-[0.95rem] font-bold text-white mb-2 leading-[1.35]">
                  {ach.title}
                </div>
                <div className="text-[0.83rem] text-[#999] leading-[1.65]">
                  {ach.desc}
                </div>
                <div className="ach-year">
                  {ach.type} · {ach.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── Education.tsx ────────────────────────────────────────────
// src/components/sections/Education.tsx
import { EDUCATION_SUBJECTS } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Education</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Academic Background
        </h2>

        <div className="glass-card reveal-scale">
          <div className="p-6 sm:p-[38px] flex flex-col md:flex-row gap-6 items-start">
            {/* Year sidebar */}
            <div className="font-display text-[0.78rem] text-[#888] tracking-[1px] md:min-w-[100px] pt-[5px] border-l-2 border-white/[0.15] pl-4">
              2023 – 2026
            </div>

            {/* Body */}
            <div className="flex-1">
              <div className="font-display text-[1.25rem] font-bold text-white mb-1">
                Diploma in Computer Engineering
              </div>
              <div className="text-[0.9rem] text-[#888] mb-[18px]">
                Pillai HOC College of Engineering &amp; Technology, Mumbai
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_SUBJECTS.map((sub) => (
                  <span key={sub} className="edu-sub">{sub}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Experience.tsx ───────────────────────────────────────────
// src/components/sections/Experience.tsx
import { EXPERIENCE_ITEMS } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Experience</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          What I&apos;ve Done
        </h2>

        <div className="glass-card px-6 sm:px-12 py-9 sm:py-11">
          <div className="exp-timeline reveal">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`exp-item relative pl-9 transition-transform duration-300 hover:translate-x-1 ${
                  idx === EXPERIENCE_ITEMS.length - 1 ? "pb-0" : "pb-10 sm:pb-12"
                }`}
              >
                <div className="exp-dot" />
                <div className="font-display text-[1.05rem] font-bold text-white">
                  {item.role}
                </div>
                <div className="text-[0.84rem] text-[#777] my-[5px] mb-3 font-display">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </div>
                <div className="text-[0.87rem] text-[#aaa] leading-[1.75]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Contact.tsx ──────────────────────────────────────────────
// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit() {
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  }

  return (
    <section id="contact" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Contact</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-[60px]">
          Let&apos;s Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {/* Info */}
          <div className="glass-card p-6 sm:p-10">
            <h3 className="font-display text-[1.4rem] text-white mb-[14px] font-bold">
              Get In Touch
            </h3>
            <p className="text-[#999] leading-[1.8] mb-[30px] text-[0.94rem]">
              Open to freelance, internship, job, and project-based work. If you
              have something interesting to build or want to collaborate, feel
              free to reach out.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-link"
                >
                  <span className="text-[1.1rem] w-[26px] text-center flex-shrink-0">
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[0.7rem] text-[#666] tracking-[1px] uppercase mb-[2px]">
                      {link.label}
                    </div>
                    <div className="truncate">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 sm:p-10">
            <div className="mb-[18px]">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Name
              </label>
              <input type="text" placeholder="Your name" className="form-input" />
            </div>
            <div className="mb-[18px]">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Email
              </label>
              <input type="email" placeholder="your@email.com" className="form-input" />
            </div>
            <div className="mb-[18px]">
              <label className="block text-[0.72rem] text-[#777] tracking-[2px] uppercase font-display mb-2">
                Message
              </label>
              <textarea
                placeholder="What's on your mind?"
                className="form-input min-h-[110px] resize-y"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status !== "idle"}
              className={`btn btn-primary w-full ${
                status === "sent" ? "!bg-[linear-gradient(135deg,#2a2a2a,#111)]" : ""
              }`}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "✓ Sent!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}