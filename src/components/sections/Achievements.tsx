// src/components/sections/Achievements.tsx
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-[2]">
      <div className="section-wrap">
        <span className="section-label">Proof I'm Not Just a Student</span>
        <h2 className="font-display font-bold gradient-text-muted text-[clamp(2rem,5vw,3rem)] leading-[1.08] mb-12 md:mb-[60px]">
          Activities & Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[18px] stagger-children reveal">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="glass-card ach-card p-5 sm:p-[30px] flex gap-4 items-start transition-all duration-[350ms] hover:-translate-y-[6px]"
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