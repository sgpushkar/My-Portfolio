// src/components/sections/TechStack.tsx
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Stack</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
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