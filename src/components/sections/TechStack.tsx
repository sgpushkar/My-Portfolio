// src/components/sections/TechStack.tsx
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="relative z-[2]">
      <div className="max-w-[1120px] mx-auto px-12 py-[110px]">
        <span className="section-label">Stack</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,4vw,3rem)] leading-[1.08] mb-[60px]">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap gap-[14px] justify-center stagger-children reveal">
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
