// src/components/sections/Skills.tsx
import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">What I Bring</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px] stagger-children reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card p-5 sm:p-7">
              <div className="skill-cat-title">{cat.title}</div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}