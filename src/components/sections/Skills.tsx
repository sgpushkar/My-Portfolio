// src/components/sections/Skills.tsx
import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[2]">
      <div className="max-w-[1120px] mx-auto px-12 py-[110px]">
        <span className="section-label">Skills</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,4vw,3rem)] leading-[1.08] mb-[60px]">
          Technical Skills
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[18px] stagger-children reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card p-7">
              <div className="skill-cat-title">{cat.title}</div>
              <div className="flex flex-wrap gap-[7px]">
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
